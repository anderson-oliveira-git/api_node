const { Router } = require('express');
const TurmaController = require('../controllers/TurmaController');

const turmaRoutes = Router();

const urlsTurma = {
  index          : '/turmas',
  obterTurma     : '/turma/:id',
  criarTurma     : '/turma/criar',
  deletarTurma   : '/turma/delete/:id',
  atualizarTurma : '/turma/atualizar/:id'
};

turmaRoutes.get(
  urlsTurma.index, 
  TurmaController.obterTurmas
);

turmaRoutes.get(
  urlsTurma.obterTurma, 
  TurmaController.obterTurmaPorId
);

turmaRoutes.post(
  urlsTurma.criarTurma, 
  TurmaController.criarTurma
);

turmaRoutes.delete(
  urlsTurma.deletarTurma, 
  TurmaController.deletarTurma
);

turmaRoutes.put(
  urlsTurma.atualizarTurma, 
  TurmaController.atualizarTurma
);

module.exports = turmaRoutes;