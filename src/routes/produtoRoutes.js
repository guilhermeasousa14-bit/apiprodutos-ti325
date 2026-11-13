const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController') //sair do routes e entrar no controllers

//Rota post
// /produtos/novo
router.post('/novo',produtoController.criarProduto);

module.exports = router;