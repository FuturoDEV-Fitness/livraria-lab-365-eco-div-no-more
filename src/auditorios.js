const Auditorio = require("../src/classes/Auditorio");
const AuditorioCrud = require("../src/classes/AuditorioCrud");

const readline = require('readline/promises');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function run() {

    const resposta = await rl.question('Escolha uma ação (criar, deletar, alterar, consultar): ');

    switch (resposta) {
        case 'criar': {

            const nome = await rl.question("Qual é o nome do auditório? ");
            const descricao = await rl.question("Qual é a descrição do auditório? ");
            const limiteSuportado = await rl.question("Qual é o limite suportado? ");

            const auditorio = new Auditorio(nome, descricao, limiteSuportado);

            const auditorioCrud = new AuditorioCrud();
            auditorioCrud.criar(auditorio);

            console.log(`Auditório ${auditorio.getNome} adicionado com sucesso.`);

            rl.close();
            break;
        }
        case 'deletar': {

            const codigoPesquisado = await rl.question("Qual é o código do auditório? ");
            const auditorioCrud = new AuditorioCrud();

            auditorioCrud.deletar(codigoPesquisado);

            rl.close();
            break;
        }
        case 'consultar': {

            const auditorioPesquisado = await rl.question("Qual é o nome do auditório? ");
            const auditorioCrud = new AuditorioCrud();
            auditorioCrud.consultar(auditorioPesquisado);

            rl.close();
            break;

        }
        default:
            console.log("Ação não reconhecida.");
            rl.close();
    }
}

run();