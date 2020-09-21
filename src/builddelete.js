export class BuildDelete {
    createDeleteStatement(request) {
        return (`\nDELETE 
        FROM EXTRACT_FILE_DETAIL
        WHERE MERCHANT_ID = ${request.merchantID}
        AND INVOICE_CLASS = '${request.invoice_class}';\n`)
    }
}

module.exports = {
    BuildDelete
}