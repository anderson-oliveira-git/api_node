const models = require('../models');

const Nivel = models.Nivel;

/**
 * Classe que contém todas os controllers de Nivel .:.
 */
class NivelController {
  static async obterNiveis (_, res) {
    try {
      const niveis = await Nivel.findAll();

      return res.status(200).json(niveis);
    } catch (error) {
      return res.status(500).json(error.message); 
    }
  }

  static async obterNivelPorId (req, res) {
    const nivelId = req.params.id;

    try {
      const nivel = await Nivel.findByPk(nivelId);

      return res.status(200).json(nivel);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criarNivel (req, res) {
    const transaction = await models.sequelize.transaction();

    try {
      await Nivel.create(req.body, { transaction });
      await transaction.commit();

      return res.status(201).send('Nivel criado com sucesso!');
    } catch (error) {
      await await transaction.rollback();

      return res.status(500).send(error);
    }
  }

  static async deletarNivel (req, res) {
    const transaction = await models.sequelize.transaction();
    const nivelId = req.params.id;

    try {
      await Nivel.destroy({
        where: {
          id: nivelId
        }
      }, { transaction });

      await transaction.commit();

      return res.status(200).send('Nivel deletado com sucesso!');
    } catch (error) {
      await transaction.rollback();

      return res.status(500).send(error);
    }
  }

  static async atualizarNivel (req, res) {
    const transaction = await models.sequelize.transaction();
    const nivelId = req.params.id;
    try {
      await Nivel.update(req.body, { 
        where: { id: nivelId } 
      }, { transaction });

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
    }

    return res.status(200).send('Nivel atualizado com sucesso!');
  }
}

module.exports = NivelController;