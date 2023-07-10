const models = require('../models');

const Turma = models.Turma;

/**
 * Classe que contém todas os controllers de Turma .:.
 */
class TurmaController {
  static async obterTurmas (_, res) {
    try {
      const turmas = await Turma.findAll();

      return res.status(200).json(turmas);
    } catch (error) {
      return res.status(500).json(error.message); 
    }
  }

  static async obterTurmaPorId (req, res) {
    const turmaId = req.params.id;

    try {
      const turma = await Turma.findByPk(turmaId);

      return res.status(200).json(turma);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criarTurma (req, res) {
    const transaction = await models.sequelize.transaction();

    try {
      await Turma.create(req.body, { transaction });
      await transaction.commit();

      return res.status(201).send('Turma criada com sucesso!');
    } catch (error) {
      await await transaction.rollback();

      return res.status(500).send(error);
    }
  }

  static async deletarTurma (req, res) {
    const transaction = await models.sequelize.transaction();
    const turmaId = req.params.id;

    try {
      await Turma.destroy({
        where: {
          id: turmaId
        }
      }, { transaction });

      await transaction.commit();

      return res.status(200).send('Turma deletada com sucesso!');
    } catch (error) {
      await transaction.rollback();

      return res.status(500).send(error);
    }
  }

  static async atualizarTurma (req, res) {
    const transaction = await models.sequelize.transaction();
    const turmaId = req.params.id;
    try {
      await Pessoa.update(req.body, { 
        where: { id: turmaId } 
      }, { transaction });

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
    }

    return res.status(200).send('Turma atualizada com sucesso!');
  }
}

module.exports = TurmaController;