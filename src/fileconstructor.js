import { Notes } from './notes.js'
import { BaseSetup } from './basesetup.js'
import { BuildInserts } from './buildInserts.js'
import { FileOutput } from './fileoutput.js'

export class FileConstructor {
    buildNewFile(request, newDate, sqlCurrentNumber, defaultBoolean) {
        var notesArray = Notes.prototype.createNotes(request, defaultBoolean)

        if (defaultBoolean) {
            var baseSetupArray = BaseSetup.prototype.createBaseInserts(request, newDate)
        }
        var insertsArray = BuildInserts.prototype.createInsertStatements(newDate, sqlCurrentNumber, request)

        var newfile = []
        
        notesArray.forEach(function(note) {
            newfile.push(note)
        })

        if (defaultBoolean) {
            baseSetupArray.forEach(function(baseSetup) {
                newfile.push(baseSetup)
            })
        }

        insertsArray.forEach(function(insert) {
            newfile.push(insert)
        })

        newfile.push("\nCOMMIT;")
        if (defaultBoolean) {
            newfile.push("\nEND;")
        }

        let filenameArray = notesArray[0].split("\\");
        let filename = filenameArray[2].substring(0, filenameArray[2].length - 4)

        FileOutput.prototype.createFile(newfile, request, filename)
    }
}

module.exports = {
    FileConstructor
}