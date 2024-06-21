const fs = require("fs");
const Instrumento = require("./Instrumento");
const crypto = require("crypto");

function generateUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = crypto.randomBytes(1)[0] % 16;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

class InstrumentoCrud {
  #path;
  constructor(path) {
    this.#path = path;
  }
  get getPath() {
    return this.#path;
  }

  set setPath(newValue) {
    this.#path = newValue;
  }

  iCreate(obj) {
    try {
      const data = fs.readFileSync("./files/instrumentos.json", "utf-8");
      let parsedData = JSON.parse(data);
      const UUID = generateUUID();
      const newInstrument = new Instrumento(
        UUID,
        obj.nome,
        obj.tipo,
        obj.estado
      );

      parsedData = [...parsedData, newInstrument];
      fs.writeFileSync(
        "./files/instrumentos.json",
        JSON.stringify(parsedData, null, 2),
        "utf-8"
      );

      console.log("Object added successfully!");
    } catch (err) {
      console.error("Error reading or parsing the file:", err);
    }
  }

  iRead() {
    try {
      const data = fs.readFileSync("./files/instrumentos.json", "utf-8");
      return JSON.parse(data);
    } catch (err) {
      console.error("Error reading or parsing the file:", err);
    }
  }

  iUpdate() {}
  iDelete() {}
}

module.exports = InstrumentoCrud;
