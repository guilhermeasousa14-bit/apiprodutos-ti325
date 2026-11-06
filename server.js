require('dotenv').config();
const express = require('express');
// file system = arquivo
const fs = require('fs');
//path = caminho
const path = require('path');

//1. Define o caminho do arquivo produtos.json
const arquivoprodutos = path.join(__dirname, 'database', 'produtos.json');

const app = express ();

app.use(express.json());

app.post('/produtos', (req, res) => {
    const {codigo, nome, qtde, preco} = req.body;
    
    //2. transformar e calcular os dados 
    const novoProduto ={
        codigo,
        nome: String(nome).toUpperCase(),
        quantidade: Number(qtde),
        preco: Number(preco),
        total: Number(qtde) * Number(preco)
    }
    //3. Ler o arquivo produtos.json
    const conteudoTexto = fs.readFileSync(arquivoprodutos, 'utf-8');
    console.log(conteudoTexto);
    const listaProdutos = JSON.parse(conteudoTexto); //converte texto em array js

    //4. Adicionar um novo produto na lista
    listaProdutos.push(novoProduto);
    //5. Salvar
    fs.writeFileSync(arquivoprodutos, JSON.stringify(listaProdutos, null, 2))
    return  res.json({
        mensagem: 'produto recebido com sucesso',
        dadosOriginais:{codigo, nome, qtde, preco}
    })
})


const PORT = process.env.PORT;
app.listen(PORT, () =>{
    console.log(`servidor rodando na porta ${PORT}`)
})

