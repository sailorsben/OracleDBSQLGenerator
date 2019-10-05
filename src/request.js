import { Oracle } from './oracle.js'
import { COLUMNS } from './columns.js'

var request = {
  desiredFields: [COLUMNS.ACCOUNT_NUMBER, COLUMNS.ACCOUNT_NAME, COLUMNS.MANIFEST_DATE, COLUMNS.RATED_DATE, COLUMNS.PRIMARY_BARCODE, COLUMNS.TRACKING_NUMBER, 
    COLUMNS.REFERENCE_NUMBER, COLUMNS.SHIP_FROM_ZIP, COLUMNS.SHIP_TO_ZIP, COLUMNS.POSTAL_CLASS, COLUMNS.TRAILER_NUMBER, COLUMNS.ACTUAL_WEIGHT, COLUMNS.BILL_ZONE, COLUMNS.BASE_FEE_AMT,
    COLUMNS.BALLOON_FEE, COLUMNS.OVERSIZE_FEE, COLUMNS.NONMACHINABLE_FEE, COLUMNS.ADDRESS_CORRECTION_FEE, COLUMNS.DELIVERY_CONF_FREE, COLUMNS.SIGNATURE_FEE, 
    COLUMNS.SPECIAL_HANDLING_FEE, COLUMNS.DELIVERY_EXCEPTION_FEE, COLUMNS.MISC_FEE, COLUMNS.DIM_WEIGHT_FEE, COLUMNS.FUEL_SURCHARGE, COLUMNS.TOTAL_FEE, 
    COLUMNS.NON_CONTINENTAL_FEE, COLUMNS.VOLUME_ADJUSTMENT_FEE, COLUMNS.WIDTH, COLUMNS.LENGTH, COLUMNS.HEIGHT, COLUMNS.DIM_WEIGHT],
  merchantName: "Office Depot",
  merchantID: 2769,
  ticketNumber: 15059,
  saveLocation: 'C:\\Users\\be016sa\\Documents\\ngs_bill_database_oracle_newg\\scripts',
  newBEF: true,
  customDate: '23-JUN-201',
  defaultBEF: false,
  invoice_class: 'FORWARD'
}

function run() {
  Oracle.prototype.initializeScript(request)
}

run();