import fs from 'fs';
import chalk from 'chalk';

function trataErro(erro) {
    throw new Error(chalk.red(erro.code, 'Não há arquivo no diretório'));
}

// ASYNC/AWAIT --->

async function pegaArquivo(caminhoDoArquivo){
    try {
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        console.log(chalk.magenta(texto));
    } catch (erro) {
        trataErro(erro);
    }
}

// THEN/CATCH --->

// function pegaArquivo(caminhoDoArquivo){
//     const encoding = 'utf-8';
//     fs.promises
//         .readFile(caminhoDoArquivo, encoding) // devolve uma promessa
//         .then((texto) => console.log(chalk.green(texto))) // que vai ser resolvida pelo then
//         .catch(trataErro) // se houver erro é lançada pro catch 
//}

// CÓDIGO SÍNCRONO --->

// function pegaArquivo(caminhoDoArquivo){
//     const encoding = 'utf-8';
//     fs.readFile(caminhoDoArq(erro) => trataErro(erro)uivo, encoding, (erro, texto) => {
//         if (erro){
//             trataErro(erro);
//         }
//         console.log(chalk.green(texto));
//     })
// }

pegaArquivo('./arquivos/texto.md'); // cenário de sucesso
pegaArquivo('./arquivos/'); // cenário de erro