import * as fs from 'fs'

export class FileOutput {
    createFile(newFile, request, filename) {

        let writeStream = fs.createWriteStream(`${request.saveLocation}\\${filename}`)
        
        newFile.forEach(function(line) {
            writeStream.write(line)
        })

        console.log(`${request.saveLocation}\\${filename} has been created.`)
    }
}

module.exports = {
    FileOutput
}