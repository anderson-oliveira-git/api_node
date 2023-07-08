const models = require('../models');

const Pessoa = models.Pessoa;

async function listarPessoas (_, res) {
  const pessoas = await Pessoa.findAll();

  return res.status(200).json({
    pessoas
  });
}

module.exports = {
  listarPessoas
}