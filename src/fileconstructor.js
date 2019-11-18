import { Notes } from './notes.js'
import { BaseSetup } from './basesetup.js'
import { BuildInserts } from './buildinserts.js'
import { BuildDelete } from './builddelete.js'
import { FileOutput } from './fileoutput.js'

export class FileConstructor {
    buildNewFile(request, newDate, sqlCurrentNumber) {
        
        var newfile = []

        var notesArray = Notes.prototype.createNotes(request)
        
        notesArray.forEach(function(note) {
            newfile.push(note)
        })

        if (request.addDelete == true) {
            var deleteSetupString = BuildDelete.prototype.createDeleteStatement(request)
            newfile.push(deleteSetupString)
        }


        if (request.defaultBEF == true) {
            var baseSetupArray = BaseSetup.prototype.createBaseInserts(request, newDate)
            baseSetupArray.forEach(function(baseSetup) {
                newfile.push(baseSetup)
            })
        }

        if (request.defaultBEF == false) {
            var insertsArray = BuildInserts.prototype.createInsertStatements(newDate, sqlCurrentNumber, request)
            insertsArray.forEach(function(insert) {
                newfile.push(insert)
            })
        }
        
        newfile.push("\nCOMMIT;")
        if (request.defaultBEF == true) {
            newfile.push("\nEND;")
        }

        let filenameArray = notesArray[0].split("\\");
        let filename = filenameArray[2].substring(0, filenameArray[2].length - 4)

        request.merchantName = request.merchantName.replace(/\s/g, "_");

        if (filename.length > 100) {
            console.log("Truncating the filename")
            filename = 'IMP-' + request.ticketNumber + '_' + request.merchantName + '_SEE_NOTES_FOR_ALL_FIELDS.sql'
            filename = filename.toUpperCase()
        }

        FileOutput.prototype.createFile(newfile, request, filename)
    }
}

module.exports = {
    FileConstructor
}