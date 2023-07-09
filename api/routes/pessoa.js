const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const pessoaRoutes = Router();

const urls = {
  index: '/pessoas',
  obterPessoa: '/pessoa/:id',
  criarPessoa: '/pessoa/criar',
  deletarPessoa: '/pessoa/delete/:id'
}

pessoaRoutes.get(urls.index, PessoaController.obterPessoas);
pessoaRoutes.get(urls.obterPessoa, PessoaController.obterUsuarioPorId);
pessoaRoutes.post(urls.criarPessoa, PessoaController.criarPessoa);
pessoaRoutes.delete(urls.deletarPessoa, PessoaController.deletarPessoa);

module.exports = pessoaRoutes;