const produtoModel = require ('../models/produtoModel');
 
const produtoController = {
    criarProduto: (req, res) => {
            const { codigo, nome, qtde, preco} = req.body;
            
            console.log(req.body);

            //validação simples dos campos obrigatórios
            if(!codigo || !nome ||!qtde ||!preco){
                return res.status(400).json({
                    sucesso: false,
                    mensagem:" todos os campos (codigo,nome.qtde e preco) são obrigatórios!"
                })
            }
 
            //transformar e calcular dados
            const nomeMaiusculo = String(nome). toUpperCase();
            const quantidade = Number (qtde);
            const valorPreco = Number (preco);
            const valorTotal = quantidade * valorPreco;
 
            const novoProduto = {
            codigo,
            nome: nomeMaiusculo,
            quantidade: quantidade,
            preco: valorPreco,
            total: valorTotal,
            criadoEm: new Date().toISOString()
            }
    
    
            // chama  o model para persistir no arquivo json
        
            const produtoSalvo = produtoModel.salvar(novoProduto); //não aplicar no projeto 
        
        
            // retorna a resposta  HTTP 201 (created)
        
            return res.status(201).json({
                sucesso: true,
                mensagem: "produto cadastrado com sucesso!",
                produto : produtoSalvo
            })
    },
       
    listarProdutos: (req, res) =>{
            const produtos = produtoModel.buscarTodos();
                return res.json({
                    sucesso : true,
                    total: produtos.length,
                    produtos
            })
           
    }
}

module.exports=produtoController;
                      