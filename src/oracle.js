import { ScriptDate } from './scriptdate.js'
import { FileConstructor } from './fileconstructor.js'

const dotenv = require('dotenv')
dotenv.config();

const oracledb = require('oracledb')
const dbConfig = require('../dbconfig.js')

export class Oracle {

  async initializeScript(request) {
    let sql, sqlCurrentNumber, results, connection, newDate

    connection = await oracledb.getConnection(dbConfig)

    sql = `select * from NEWG.EXTRACT_FILE_DETAIL 
             where MERCHANT_ID = ${request.merchantID} 
             and invoice_class = 'FORWARD'
             order by sortorder asc`

    try {
      console.log("Attempting SQL")
      results = await connection.execute(sql)

      newDate = ScriptDate.prototype.getScriptDate()

      if (results.rows.length > 0) {
        sqlCurrentNumber = results.rows[results.rows.length - 1][4] + 1
        console.log(`Iterating new rows from: ${sqlCurrentNumber}`)
        FileConstructor.prototype.buildNewFile(request, newDate, sqlCurrentNumber, false)
      } else {
        console.log("0 rows were found.")
        console.log("Creating rows for base columns. New inserts will start at 22.")
      
        sqlCurrentNumber = 22

        FileConstructor.prototype.buildNewFile(request, newDate, sqlCurrentNumber, true)
      }
    } catch (err) {
      console.log(err)
    } finally {
      if (connection) {
        try {
          await connection.close()
        } catch (err) {
          console.error(err)
        }
      }
    }
  }
}