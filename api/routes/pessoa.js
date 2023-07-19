const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const pessoaRoutes = Router();

const urlsPessoa = {
  index           : '/pessoas',
  obterPessoa     : '/pessoa/:id',
  criarPessoa     : '/pessoa/criar',
  deletarPessoa   : '/pessoa/delete/:id',
  atualizarPessoa : '/pessoa/atualizar/:id',
}

pessoaRoutes.get(
  urlsPessoa.index, 
  PessoaController.obterPessoas
);

pessoaRoutes.get(
  urlsPessoa.obterPessoa, 
  PessoaController.obterUsuarioPorId
);

pessoaRoutes.post(
  urlsPessoa.criarPessoa, 
  PessoaController.criarPessoa
);

pessoaRoutes.delete(
  urlsPessoa.deletarPessoa, 
  PessoaController.deletarPessoa
);

pessoaRoutes.put(
  urlsPessoa.atualizarPessoa, 
  PessoaController.atualizarPessoa
);

module.exports = pessoaRoutes;