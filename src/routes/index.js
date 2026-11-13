const express = require('express');
const router = express.Router();

const produtosRoutes = require('./produtoRoutes');
const usuarioRoutes = require('./usuarioRoutes');


// associa o prefixo /produtos ao arquivo routes

router.use('/produtos', produtosRoutes);
router.use('/usuario',usuarioRoutes);

//associção com a rota /usuarios

router.use('/produtos', produtosRoutes);
module.exports = router;


