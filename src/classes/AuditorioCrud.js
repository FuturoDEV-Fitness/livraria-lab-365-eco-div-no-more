const fs = require("fs");

class AuditorioCrud {
    
    constructor() {
        this.filePath = './src/files/auditorios.json';
    }

    criar(auditorio) {

        const auditoriosSalvos = JSON.parse(fs.readFileSync(this.filePath, "utf-8"));

        auditoriosSalvos.push({
            codigo: auditorio.getCodigo,
            nome: auditorio.getNome,
            descricao: auditorio.getDescricao,
            limiteSuportado: auditorio.getLimiteSuportado
        })

        fs.writeFileSync(
            this.filePath,
            JSON.stringify(auditoriosSalvos, null, 2),
            "utf-8"
        )
    }

    deletar(codigoPesquisado) {
                
        const auditoriosSalvos = JSON.parse(fs.readFileSync(this.filePath, "utf-8"));

        const codigoEncontrado = auditoriosSalvos.find(auditorio => auditorio.codigo === codigoPesquisado);

        if(codigoEncontrado) {
            const auditoriosRestantes = (auditoriosSalvos.filter(auditorio => auditorio.codigo !== codigoPesquisado));
            console.log(`Auditório código [ ${codigoPesquisado} ] removido com sucesso.`);

            fs.writeFileSync(
                this.filePath,
                JSON.stringify(auditoriosRestantes, null, 2),
                "utf-8"
            )
        } else {
            console.log("Código de auditório não encontrado.");
        }
    }

    alterar(auditorioAlterado) {

        const auditoriosSalvos = JSON.parse(fs.readFileSync(this.filePath, "utf-8"));

        const codigoEncontrado = auditoriosSalvos.find(auditorio => auditorio.codigo === auditorioAlterado.codigo);

        codigoEncontrado.nome = auditorioAlterado.nome;
        codigoEncontrado.descricao = auditorioAlterado.descricao;
        codigoEncontrado.limiteSuportado = auditorioAlterado.limiteSuportado;

        console.log("Auditório alterado com sucesso.");

        fs.writeFileSync(
            this.filePath,
            JSON.stringify(auditoriosSalvos, null, 2),
            "utf-8"
        )
    }

    consultar(auditorioPesquisado) {
                
        const auditoriosSalvos = JSON.parse(fs.readFileSync(this.filePath, "utf-8"));

        const auditorioEncontrado = auditoriosSalvos.find(auditorio => auditorio.nome === auditorioPesquisado);

        if(auditorioEncontrado) {
            return auditorioEncontrado;
        } else {
            return "Auditório não encontrado.";
        }
    }
}

module.exports = AuditorioCrud;