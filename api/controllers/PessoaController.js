const models = require('../models');

const Pessoa = models.Pessoa;

/**
 * Classe que contém todas os controllers de Pessoa .:.
 */
class PessoaController {
  static async obterPessoas (_, res) {
    try {
      const pessoas = await Pessoa.findAll();

      return res.status(200).json(pessoas);
    } catch (error) {
      return res.status(500).json(error.message); 
    }
  }

  static async obterUsuarioPorId (req, res) {
    const pessoaId = req.params.id;

    try {
      const pessoa = await Pessoa.findByPk(pessoaId);

      return res.status(200).json(pessoa);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criarPessoa (req, res) {
    const transaction = await models.sequelize.transaction();

    try {
      await Pessoa.create(req.body, { transaction });
      await transaction.commit();

      return res.status(201).send('Pessoa criada com sucesso!');
    } catch (error) {
      await await transaction.rollback();

      return res.status(500).send(error);
    }
  }

  static async deletarPessoa (req, res) {
    const transaction = await models.sequelize.transaction();
    const pessoaId = req.params.id;

    try {
      await Pessoa.destroy({
        where: {
          id: pessoaId
        }
      }, { transaction });

      await transaction.commit();

      return res.status(200).send('Pessoa deletada com sucesso!');
    } catch (error) {
      await transaction.rollback();

      return res.status(500).send(error);
    }
  }

  static async atualizarPessoa (req, res) {
    const transaction = await models.sequelize.transaction();
    const pessoaId = req.params.id;
    try {
      await Pessoa.update(req.body, { 
        where: { id: pessoaId } 
      }, { transaction });

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
    }

    return res.status(200).send('Pessoa atualizada com sucesso!');
  }

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

module.exports = PessoaController;