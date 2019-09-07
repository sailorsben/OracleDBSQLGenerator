export class BuildInserts {
    createInsertStatements(newDate, sqlCurrentNumber, request) {
        var insertsArray = []
        request.desiredFields.forEach( function(desiredField)  {
            var output = `\nINSERT INTO EXTRACT_FILE_DETAIL
            ( MERCHANT_ID,VERSION,RECORD_TYPE,FIELD_ID,SORTORDER,INVOICE_CLASS,EFFECTIVE_START_DT )
            VALUES ( ${request.merchantID},1,'PI',${desiredField},${sqlCurrentNumber++},'FORWARD','${newDate}' );`
            insertsArray.push(output)
        })

        return insertsArray
    }
}

module.exports = {
    BuildInserts
}