const models = require('../models');

const Matricula = models.Matricula;

/**
 * Classe que contém todas os controllers de Pessoa .:.
 */
class MatriculaController {
  static async obterMatriculaPessoa (req, res) {
    const { pessoaId, matriculaId } = req.params;

    try {
      const matricula = await models.Matricula.findOne({
        where: {
          id: matriculaId,
          estudante_id: pessoaId
        }
      });

      return res.status(200).json(matricula);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criarMatricula (req, res) {
    const transaction = await models.sequelize.transaction();
    const { pessoaId } = req.params;
    
    const novaMatricula = {
      ...req.body,
      estudante_id: pessoaId
    }
    
    try {
      await models.Matricula.create(novaMatricula, { transaction });
      await transaction.commit();

      return res.status(201).send('Matricula criada com sucesso!');
    } catch (error) {
      await await transaction.rollback();

      return res.status(500).send(error);
    }
  }
}

module.exports = MatriculaController;