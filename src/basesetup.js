export class BaseSetup {
    createBaseInserts(request, newDate) {
        var baseSetupArray = []
        const matchZero = 
        `DECLARE
        newMerchant NEWG.EXTRACT_FILE_DETAIL.MERCHANT_ID%TYPE := '${request.merchantID}';
        newDate date := '${newDate}';
      
        \nBEGIN
        INSERT INTO EXTRACT_FILE_DETAIL 
        (MERCHANT_ID, VERSION, RECORD_TYPE, FIELD_ID, SORTORDER, INVOICE_CLASS, EFFECTIVE_START_DT, EFFECTIVE_END_DT)
        SELECT newMerchant, VERSION, RECORD_TYPE, FIELD_ID, SORTORDER, INVOICE_CLASS, newDate, EFFECTIVE_END_DT
        FROM EXTRACT_FILE_DETAIL
        WHERE MERCHANT_ID = 0 and INVOICE_CLASS = 'FORWARD'
        ORDER BY SORTORDER ASC;\n`

        baseSetupArray.push(matchZero)
        return baseSetupArray
    }
}

module.exports = {
    BaseSetup
}