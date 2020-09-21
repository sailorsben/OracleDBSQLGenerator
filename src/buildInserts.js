export class BuildInserts {
    createInsertStatements(newDate, sqlCurrentNumber, request) {
        console.log("Creating insert statements.")
        var insertsArray = []
        
        if (request.desiredFields.length < 1) {
            console.log("There are no inserts to be created.")
        } else {
            request.desiredFields.forEach( function(desiredField)  {
                var output = `\nINSERT INTO EXTRACT_FILE_DETAIL
                ( MERCHANT_ID,VERSION,RECORD_TYPE,FIELD_ID,SORTORDER,INVOICE_CLASS,EFFECTIVE_START_DT )
                VALUES ( ${request.merchantID},1,'PI',${desiredField},${sqlCurrentNumber++},'${request.invoice_class}','${newDate}' );`
                insertsArray.push(output)
            })
        }        

        return insertsArray
    }
}

module.exports = {
    BuildInserts
}