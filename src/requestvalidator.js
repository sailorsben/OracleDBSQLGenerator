export class RequestValidator {

    checkRequest(request) {
        // Error Array to show all errors
        var errorsArray = []

        // Check request desired fields.
        if (request.desiredFields) {

        } else {
            errorsArray.push(new Errror ("request.desiredFields is null."))
        }

        // Check merchantName
        if (request.merchantName) {

        } else {
            errorsArray.push(new Error ("request.merchantName is null."))
        }

        // Check merchantID
        if (request.merchantID) {

        } else {
            errorsArray.push(new Error ("request.merchantID is null."))
        }

        // Check ticket number
        if (request.ticketNumber) {

        } else {
            errorsArray.push(new Error ("request.ticketNumber is null."))
        }

        // Check save location
        if (request.saveLocation) {

        } else {
            errorsArray.push(new Error ("request.saveLoation is null."))
        }

        // Check newBEF
        if (request.newBEF != null) {

        } else {
            errorsArray.push(new Error ("request.newBEF is null."))
        }

        // Check customDate
        if (request.customDate) {

        } else {
            errorsArray.push(new Error ("request.customDate is null."))
        }

        // Check defaultBEF
        if (request.defaultBEF != null) {

        } else {
            errorsArray.push(new Error ("request.defaultBEF is null."))
        }

        // Check invoice_class
        if (request.invoice_class) {

        } else {
            errorsArray.push(new Error ("request.invoice_class is null."))
        }

        // Output all errors
        errorsArray.forEach(function(error) {
             console.log(error)
         });

        if (errorsArray.length == 0 ) {
            return true
        } else {
            return false
        }
    }
}