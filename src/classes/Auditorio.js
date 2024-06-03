const crypto = require("crypto");

class Auditorio {

    #codigo = "";
    #nome = "";
    #descricao = "";
    #limiteSuportado = 0;

    constructor(nome, descricao, limiteSuportado) {
        this.#codigo = crypto.randomUUID();
        this.#nome = nome;
        this.#descricao = descricao;
        this.#limiteSuportado = limiteSuportado;
    }

    get getCodigo() {
        return this.#codigo;
    }

    get getNome() {
        return this.#nome;
    }

    set setNome(nome) {
        this.#nome = nome;
    }

    get getDescricao() {
        return this.#descricao;
    }

    set setDescricao(descricao) {
        this.#descricao = descricao;
    }

    get getLimiteSuportado() {
        return this.#limiteSuportado;
    }

    set setLimiteSuportado(limiteSuportado) {
        this.#limiteSuportado = limiteSuportado;
    }
}

module.exports = Auditorio;