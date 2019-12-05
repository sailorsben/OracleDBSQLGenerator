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
             and invoice_class = '${request.invoice_class}'
             order by sortorder asc`

    try {
      console.log("Attempting SQL")
      results = await connection.execute(sql)

      if (request.customDate) {
        var dateRegex = new RegExp('\\d{2}-\\w{3}-\\d{4}')
        if (request.customDate.match(dateRegex)) {
          newDate = request.customDate
        } else {
          throw new Error('The customDate field in the request is formatted incorrectly. It should follow the format of 01-JAN-2019')
        }
        
      } else {
        newDate = ScriptDate.prototype.getScriptDate()
      }

      if (results.rows.length > 0) {
        sqlCurrentNumber = results.rows[results.rows.length - 1][4] + 1

        if (request.newBEF == true) {
          sqlCurrentNumber = 1;
        } else {
          console.log("Editing an existing BEF...")
        }

        console.log(`Iterating new rows from: ${sqlCurrentNumber}`)

        FileConstructor.prototype.buildNewFile(request, newDate, sqlCurrentNumber)
      } else {
        console.log("0 rows were found.")

        if (request.newBEF == false) {
          console.log("Creating rows for base columns. New inserts will start at 38.")
      
          sqlCurrentNumber = 38
        } else {
          sqlCurrentNumber = 1
        }

        FileConstructor.prototype.buildNewFile(request, newDate, sqlCurrentNumber)
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