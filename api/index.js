const express = require('express');
const pessoaController = require('../api/controllers/pessoa.controller.js');

require('dotenv').config({
  path: __dirname + '/./../.env'
});

const app  = express();
const port = process.env.SERVER_PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', pessoaController.listarPessoas);

app.listen(port, () => {
  console.log('Server running: http://localhost:' + port);
});
