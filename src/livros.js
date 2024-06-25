const readline = require('readline/promises');
const LivroCrud = require('./classes/LivroCrud.js');
const Livro = require('./classes/Livro.js');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

async function run() {

    const resposta = await rl.question('Escolha uma ação (criar, deletar, alterar, consultar): ');

    switch (resposta) {
        case 'criar': {
            
            const name = await rl.question('Digite o nome do livro: ');
            const author = await rl.question('Digite o autor do livro: ');
            const gender = await rl.question('Digite o gênero do livro: ');
            let qtPage = await rl.question('Digite a quantidade de páginas do livro: ');

            qtPage = parseInt(qtPage);
            if (isNaN(qtPage)) {
                console.log("Quantidade de páginas inválida.");
                break;
            }
            const livro = new Livro(name, author);
            livro.setGender = gender;
            livro.setQtPage = qtPage;
            
            const livroCrud = new LivroCrud();
            livroCrud.create(livro);
            console.log(`Livro ${livro.getName} criado com sucesso.`);
            break;
        }

        case 'deletar': {
            const code = await rl.question('Digite o código do livro: ');
            const livroCrud = new LivroCrud();
            const livro = livroCrud.read(code);
            if (!livro) {
                console.log("Livro não encontrado.");
                break;
            }

            livroCrud.delete(code);
            console.log(`Livro ${livro.name} deletado com sucesso.`);
            break;
        }
        case 'consultar': {
            const code = await rl.question('Digite o código do livro: ');
            const livroCrud = new LivroCrud();
            const livro = livroCrud.read(code);
            if (!livro) {
                console.log("Livro não encontrado.");
                return;
            }

            console.log('Livro encontrado:');
            console.log('Código:', livro.code);
            console.log('Nome:', livro.name);
            console.log('Autor:', livro.author);
            console.log('Gênero:', livro.gender);
            console.log('Quantidade de páginas:', livro.qtPage);
            console.log('---------------------------------');

            break;
        }
        case 'alterar': {
            const code = await rl.question('Digite o código do livro: ');
            const livroCrud = new LivroCrud();
            const livro = livroCrud.read(code);
            if (!livro) {
                console.log("Livro não encontrado.");
                return;
            }

            let changeMore = true;
            while (changeMore) {
                const resposta = await rl.question('Qual informação você deseja alterar? (1. Nome, 2. Autor, 3. Gênero, 4. Páginas, 5. Sair): ');

                switch (resposta) {
                    case '1': {
                        const name = await rl.question('Digite o nome do livro: ');
                        livro.name = name;
                        break;
                    }
                    case '2': {
                        const author = await rl.question('Digite o autor do livro: ');
                        livro.author = author;
                        break;
                    }
                    case '3': {
                        const gender = await rl.question('Digite o gênero do livro: ');
                        livro.gender = gender;
                        break;
                    }
                    case '4': {
                        let qtPage = await rl.question('Digite a quantidade de páginas do livro: ');

                        qtPage = parseInt(qtPage);
                        if (isNaN(qtPage)) {
                            console.log("Quantidade de páginas inválida.");
                            break;
                        }

                        livro.qtPage = qtPage;
                        break;
                    }
                    case '5': {
                        changeMore = false;
                        break;
                    }
                    default:
                        console.log("Ação não reconhecida.");
                }
            }

            livroCrud.update(livro);
            console.log(`Livro ${livro.name} editado com sucesso.`);
            break;
        }
        default:
            console.log("Ação não reconhecida.");
            rl.close();
    }
    rl.close();

}

run();
