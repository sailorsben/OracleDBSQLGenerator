export class BuildDelete {
    createDeleteStatement(request) {
        return (`\nDELETE 
        FROM EXTRACT_FILE_DETAIL
        WHERE MERCHANT_ID = ${request.merchantID};\n`)
    }
}

module.exports = {
    BuildDelete
}