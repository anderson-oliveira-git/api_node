const { Router } = require('express');
const nivelController = require('../controllers/NivelController');

const nivelRoutes = Router();

const urlsNivel = {
  index          : '/niveis',
  obterNivel     : '/nivel/:id',
  criarNivel     : '/nivel/criar',
  deletarNivel   : '/nivel/delete/:id',
  atualizarNivel : '/nivel/atualizar/:id'
};

nivelRoutes.get(
  urlsNivel.index, 
  nivelController.obterNiveis
);

nivelRoutes.get(
  urlsNivel.obterNivel, 
  nivelController.obterNivelPorId
);

nivelRoutes.post(
  urlsNivel.criarNivel, 
  nivelController.criarNivel
);

nivelRoutes.delete(
  urlsNivel.deletarNivel, 
  nivelController.deletarNivel
);

nivelRoutes.put(
  urlsNivel.atualizarNivel, 
  nivelController.atualizarNivel
);

module.exports = nivelRoutes;
