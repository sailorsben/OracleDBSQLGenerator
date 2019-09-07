import { MONTHS } from './months.js'

export class ScriptDate {
    
    getScriptDate() {
        let time = new Date();
        time = time.toISOString().substring(0,10)
        time = time.split('-')
        var keys = Object.keys(MONTHS)
        keys.forEach(function(key) {
          if ( key < 10) {
            key = "0" + key
          }
    
          if (time[1] == key) {
            if (key[0] == 0)  {
              key = key[1]
            }
    
            time[1] = MONTHS[key]
          }
        });
        
        time = `01-${time[1]}-${time[0]}`
        
        return time
      }
}

module.exports = {
    ScriptDate
}