import { Oracle } from './oracle.js'
import { COLUMNS } from './columns.js'

var request = {
  desiredFields: [COLUMNS.DIM_WEIGHT, COLUMNS.LENGTH, COLUMNS.HEIGHT, COLUMNS.WIDTH],
  merchantName: "Yan Wen",
  merchantID: 2867,
  ticketNumber: 16101,
  saveLocation: 'C:\\Users\\be016sa\\Documents\\ngs_bill_database_oracle_newg\\scripts'
}

function run() {
  Oracle.prototype.initializeScript(request)
}

run();