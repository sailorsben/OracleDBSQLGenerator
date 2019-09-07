import { COLUMNS } from './columns.js'

export class Notes {

    createNotes(request, defaultBoolean) {
        var notesArray = []
        var description = `/*IMP-${request.ticketNumber} Add `
        var keys = Object.keys(COLUMNS)
        keys.forEach(function(keys) {
            if (request.desiredFields.includes(COLUMNS[keys])) {
                description = description  + keys + ", "
            }
        })

        description = description.substring(0, description.length-2)
        description = description + "\n(Field ID "

        request.desiredFields.forEach(function(desiredField) {
            description = description + desiredField + ", "
        })
        description = description.substring(0, description.length-2)
        description = description + `) to end of BEF for ${request.merchantName} */ \n\n`
        description = description + `/* @ Branch - Parcel\\ngs_pcl_database_core\\IMP-${request.ticketNumber}_${request.merchantName}`
        if (defaultBoolean) {
            description = description + "_DEFAULT_"
        } else {
            description = description + "_"
        }
        keys.forEach(function(keys) {
            if (request.desiredFields.includes(COLUMNS[keys])) {
                description = description  + keys + "_"
            }
        })
        description = description.substring(0, description.length-1)
        description = description + ".sql */"  + "\n"
        notesArray.push(description)
        //Loop through request fields and add them to the description.

        //output as an Array of Strings.
        return notesArray
    }
}

module.exports = {
    Notes
}