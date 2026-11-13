// file system = arquivo
const fs = require('fs');
// path = caminho
const path = require('path');

// 1. define o caminho do arquivbo
const arquivoProdutos = path.join(__dirname,'..','..', 'database', 'produtos.json');

const produtoModel = { 
    //1. le todos os produtos do arquivo json
    buscarTodos: () =>{

    
        if(!fs.readFileSync(arquivoProdutos, 'utf-8')) {
            return [];

        }
        const conteudo = (fs.readFileSync(arquivoProdutos, 'utf-8'));
        return conteudo.trim() ? JSON.parse (conteudo) : [];


    },
    //2. salva um novo produto

    salvar: (novoProduto) =>{
            const listaProdutos = produtoModel.buscarTodos();

            //3. adicionar o novo profuto na lista 
            listaProdutos.push(novoProduto);
            //4. salvar o rquivo
            fs.writeFileSync(arquivoProdutos, JSON.stringify, null, 2)


    return novoProduto 
 


    }
}
module.exports = produtoModel;

