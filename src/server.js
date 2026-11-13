require('dotenv').config();
const express = require('express');
const routes = require('./routes')
const app = express ();

app.use(express.json());
//carrega todas as rotas principais da API
app.use(routes);


const PORT = process.env.PORT;
app.listen(PORT, () =>{
    console.log(`servidor rodando na porta ${PORT}`)
})
