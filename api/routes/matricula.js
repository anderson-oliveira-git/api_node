const { Router } = require('express');
const MatriculaController = require('../controllers/MatriculaController');

const matriculaRoutes = Router();

const urlsMatricula = {
  criarMatricula       : '/pessoa/criar/matricula/:pessoaId',
  obterMatriculaPessoa : '/pessoa/:pessoaId/matricula/:matriculaId'
}

matriculaRoutes.get(
  urlsMatricula.obterMatriculaPessoa, 
  MatriculaController.obterMatriculaPessoa
);

matriculaRoutes.post(
  urlsMatricula.criarMatricula, 
  MatriculaController.criarMatricula
);

module.exports = matriculaRoutes;