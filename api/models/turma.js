'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Turma extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Turma.belongsTo(models.Pessoa, {
        foreignKey: 'docente_id'
      });

      Turma.belongsTo(models.Nivel, {
        foreignKey: 'nivel_id'
      });

      Turma.hasMany(models.Matricula, {
        foreignKey: 'turma_id'
      });
    }
  }

  Turma.init({
    data_inicio: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Turma',
    tableName: 'turmas'
  });

  return Turma;
};