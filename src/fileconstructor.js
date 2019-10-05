import { Notes } from './notes.js'
import { BaseSetup } from './basesetup.js'
import { BuildInserts } from './buildInserts.js'
import { FileOutput } from './fileoutput.js'

export class FileConstructor {
    buildNewFile(request, newDate, sqlCurrentNumber) {
        
        var newfile = []

        var notesArray = Notes.prototype.createNotes(request)
        
        notesArray.forEach(function(note) {
            newfile.push(note)
        })


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

        if (filename.length > 100) {
            console.log("Truncating the filename")
            filename = filename.substring(0, 100) + ".sql"
        }

        FileOutput.prototype.createFile(newfile, request, filename)
    }
}

module.exports = {
    FileConstructor
}