const fs = require('fs');

class LivroCrud {

    constructor() {
        this.filePath = './src/files/livros.json';
    }

    readLivros() {
        const data = fs.readFileSync(this.filePath, 'utf-8');
        return JSON.parse(data);
    }

    saveLivros(livros) {
        fs.writeFileSync(this.filePath, JSON.stringify(livros, null, 2), 'utf-8');
    }

    create(livro) {
        const livros = this.readLivros();

        livros.push({
            code: livro.getCode,
            name: livro.getName,
            author: livro.getAuthor,
            gender: livro.getGender,
            qtPage: livro.getQtPage
        });

        this.saveLivros(livros);
    }

    read(code) {
        const livros = this.readLivros();

        return livros.find(livro => livro.code == code);
    }

    readAll() {
        const livros = this.readLivros();

        return livros;
    }

    update(livro) {
        const livros = this.readLivros();

        console.log('livro', livro)
        console.log('livro code', livro.getCode)

        const index = livros.findIndex(l => l.code == livro.code);
        console.log(index);
        livros[index] = livro;

        this.saveLivros(livros);
    }

    delete(livro) {
        const livros = this.readLivros();

        const filteredLivros = livros.filter(l => l.getCode !== livro.getCode);

        this.saveLivros(filteredLivros);
    }

}

module.exports = LivroCrud;