import { Oracle } from './oracle.js'
import { COLUMNS } from './columns.js'

var request = {
  desiredFields: [COLUMNS.APOFPO_ZIP_FLAG],
  merchantName: "Cai_Niao",
  merchantID: 2902,
  ticketNumber: 15499,
  saveLocation: 'C:\\Users\\be016sa\\Documents\\ngs_bill_database_oracle_newg\\scripts'
}

function run() {
  Oracle.prototype.initializeScript(request)
}

run();