const crypto = require('crypto');

class Livro {

    #code = '';
    #name = '';
    #author = '';
    #gender = '';
    #qtPage = 0;
    constructor(name, author) {
        this.#code = crypto.randomUUID();
        this.#name = name;
        this.#author = author;
    }

    set setNome(name) {
        this.#name = name;
    }

    set setAuthor(author) {
        this.#author = author;
    }

    set setGender(gender) {
        this.#gender = gender;
    }

    set setQtPage(qtPage) {
        this.#qtPage = qtPage;
    }

    get getCode() {
        return this.#code;
    }

    get getName() {
        return this.#name;
    }

    get getAuthor() {
        return this.#author;
    }

    get getGender() {
        return this.#gender;
    }

    get getQtPage() {
        return this.#qtPage;
    }

}

module.exports = Livro;