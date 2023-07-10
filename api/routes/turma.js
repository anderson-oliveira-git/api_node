const { Router } = require('express');
const TurmaController = require('../controllers/TurmaController');

const turmaRoutes = Router();

const urls = {
  index: '/turmas',
  obterTurma: '/turma/:id',
  criarTurma: '/turma/criar',
  deletarTurma: '/turma/delete/:id',
  atualizarTurma: '/turma/atualizar/:id'
};

turmaRoutes.get(urls.index, TurmaController.obterTurmas);
turmaRoutes.get(urls.obterTurma, TurmaController.obterTurmaPorId);
turmaRoutes.post(urls.criarTurma, TurmaController.criarTurma);
turmaRoutes.delete(urls.deletarTurma, TurmaController.deletarTurma);
turmaRoutes.put(urls.atualizarTurma, TurmaController.atualizarTurma);

module.exports = turmaRoutes;