const fs = require('fs');

class InstrumentoCrud {
    #path
    constructor(path) {
       this.#path = path
    }
    get getPath(){ return this.#path}

    set setPath(newValue){ this.#path = newValue}


    iCreate(obj){

    }
    iRead(){
        try {
            const data = fs.readFileSync('./files/instrumentos.json', 'utf-8');
            return JSON.parse(data);
          } catch (err) {
            console.error('Error reading or parsing the file:', err);
          }
        }

    
  
    iUpdate(){

    }
    iDelete(){

    }

}

module.exports = InstrumentoCrud;