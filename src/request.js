import { Oracle } from './oracle.js'
import { COLUMNS } from './columns.js'

var request = {
  desiredFields: [COLUMNS.DIM_WEIGHT, COLUMNS.LENGTH, COLUMNS.HEIGHT, COLUMNS.WIDTH],
  merchantName: "Office Depot",
  merchantID: 2769,
  ticketNumber: 15059,
  saveLocation: 'C:\\Users\\be016sa\\Documents\\ngs_bill_database_oracle_newg\\scripts'
}

function run() {
  Oracle.prototype.initializeScript(request)
}

run();