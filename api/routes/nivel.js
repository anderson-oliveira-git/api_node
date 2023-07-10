const { Router } = require('express');
const nivelController = require('../controllers/NivelController');
const nivelRoutes = Router();

const urls = {
  index: '/niveis',
  obterNivel: '/nivel/:id',
  criarNivel: '/nivel/criar',
  deletarNivel: '/nivel/delete/:id',
  atualizarNivel: '/nivel/atualizar/:id'
};

nivelRoutes.get(urls.index, nivelController.obterNiveis);
nivelRoutes.get(urls.obterNivel, nivelController.obterNivelPorId);
nivelRoutes.post(urls.criarNivel, nivelController.criarNivel);
nivelRoutes.delete(urls.deletarNivel, nivelController.deletarNivel);
nivelRoutes.put(urls.atualizarNivel, nivelController.atualizarNivel);

module.exports = nivelRoutes;
