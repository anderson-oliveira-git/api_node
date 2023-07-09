'use strict';

/**
 *  @type {import('sequelize-cli').Migration} 
 */
module.exports = {
  async up (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.addColumn('matriculas', 'turma_id', {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'turmas',
          key: 'id'
        }
      }, { transaction });

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
    }
  },

  async down (queryInterface, _) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.removeColumn('matriculas', 'turma_id', {
        transaction
      });

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
    }
  }
};
