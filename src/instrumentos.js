const readline = require('readline/promises');
const Instrumento = require('./classes/Instrumento')
const InstrumentoCrud = require('./classes/IntrumentoCrud')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function run() {
    const crud = new InstrumentoCrud

    let resposta = await rl.question('Escolha uma ação (criar, deletar, alterar, consultar): ');
    resposta = 'consultar'
    switch (resposta) {
        case 'criar':
         
            rl.close();
            break;
        case 'deletar': {
            /* Coloque sua resposta aqui */
            rl.close();
            break;
        }
        case 'consultar': {
            const resposta = crud.iRead()
            console.log('resposta é:' )
            console.log(resposta)
            rl.close();
            break;
        }
        default:
            console.log("Ação não reconhecida.");
            rl.close();
    }

}

run();
