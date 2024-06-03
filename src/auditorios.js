const Auditorio = require("../src/classes/Auditorio");
const AuditorioCrud = require("../src/classes/AuditorioCrud");

const readline = require('readline/promises');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function run() {

    const resposta = await rl.question("Escolha uma ação (criar, deletar, alterar, consultar): ");

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
        case 'alterar': {

            const auditorioPesquisado = await rl.question("Qual é o nome do auditório que deseja alterar? ");
            const auditorioCrud = new AuditorioCrud();
            const resposta = auditorioCrud.consultar(auditorioPesquisado);

            if(resposta !== "Auditório não encontrado.") {
                const auditorioTemp = resposta;

                console.log(`Alterar o nome existente [${resposta.nome}]?`);
                const alterarNome = await rl.question("Se sim, digite o novo nome, se não digite n: ");

                if(alterarNome !== "n") {
                    auditorioTemp.nome = alterarNome;
                }

                console.log(`Alterar a descrição existente [${resposta.descricao}]?`);
                const alterarDescricao = await rl.question("Se sim, digite a nova descrição, se não digite n: ");

                if(alterarDescricao !== "n") {
                    auditorioTemp.descricao = alterarDescricao;
                }

                console.log(`Alterar o limite existente [${resposta.limiteSuportado}]?`);
                const alterarLimite = await rl.question("Se sim, digite o novo limite, se não digite n: ");

                if(alterarLimite !== "n") {
                    auditorioTemp.limiteSuportado = alterarLimite;
                }
                auditorioCrud.alterar(auditorioTemp);
            } else {
                console.log(resposta)
            }

            rl.close();
            break;
        }
        case 'consultar': {

            const auditorioPesquisado = await rl.question("Qual é o nome do auditório? ");
            const auditorioCrud = new AuditorioCrud();
            const respostaConsulta = auditorioCrud.consultar(auditorioPesquisado);

            console.log("----- Resultado da Consulta -----");
            if (respostaConsulta !== "Auditório não encontrado.") {
                // console.log(`Código: ${respostaConsulta.codigo}`);
                console.log(`Nome: ${respostaConsulta.nome}`);
                console.log(`Descrição: ${respostaConsulta.descricao}`);
                console.log(`Limite Suportado: ${respostaConsulta.limiteSuportado}`);
            } else {
                console.log(respostaConsulta);
            }
            console.log("---------------------------------");

            rl.close();
            break;
        }
        default: {
            console.log("Ação não reconhecida.");
            rl.close();
        }
    }
}

run();