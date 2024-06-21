const readline = require("readline/promises");
const Instrumento = require("./classes/Instrumento");
const InstrumentoCrud = require("./classes/IntrumentoCrud");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function validate(input) {
  const regex = /^([^,]*),([^,]*),([^,]*)$/;
  const match = input.match(regex);

  if (match) {
    return match.slice(1);
  } else {
    return null;
  }
}

async function run() {
  const crud = new InstrumentoCrud();

  let resposta = await rl.question(
    "Escolha uma ação (criar, deletar, alterar, consultar): "
  );
  switch (resposta) {
    case "criar":
      let respostaCriar = await rl.question(
        "Digite as informações do instrumento, separando por virgulas. (nome,tipo,estado): "
      );
      const validInput = validate(respostaCriar);

      validInput
        ? crud.iCreate({
            nome: validInput[0],
            tipo: validInput[1],
            estado: validInput[2],
          })
        : console.log("\nThe input Instrument is not valid. Try again.\n");
      rl.close();
      break;
    case "deletar": {
      let respostaDeletar = await rl.question(
        "Digite o codigo do objeto a ser deletado: "
      );
      crud.iDelete(respostaDeletar);
      rl.close();
      break;
    }
    case "consultar": {
      const resposta = crud.iRead();
      console.log("resposta é:");
      console.log(resposta);
      rl.close();
      break;
    }
    default:
      console.log("Ação não reconhecida.");
      rl.close();
  }
}

run();
