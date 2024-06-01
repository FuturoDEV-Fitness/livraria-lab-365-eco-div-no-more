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

    deletar(codigo) {
        // ler o array e procurar pelo codigo
        // const auditoriosSalvos = JSON.parse(fs.readFileSync(this.filePath, "utf-8"));
        // const auditorioEncontrado = auditoriosSalvos.find(auditorio => auditorio.nome === auditorioPesquisado)
        // usar o filter para remover o elemento
        // salva de novo no arquivo o array filtrado
    }

    consultar(auditorioPesquisado) {
                
        const auditoriosSalvos = JSON.parse(fs.readFileSync(this.filePath, "utf-8"));

        const auditorioEncontrado = auditoriosSalvos.find(auditorio => auditorio.nome === auditorioPesquisado)

        if(auditorioEncontrado) {
            console.log(auditorioEncontrado)
        } else {
            console.log("Auditório não encontrado.")
        }
    }
}

module.exports = AuditorioCrud;