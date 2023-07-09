'use strict';

/**
 * @type {import('sequelize-cli').Migration} 
 */
module.exports = {
  async up (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.addColumn('turmas', 'docente_id', {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'pessoas',
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
      await queryInterface.removeColumn('turmas', 'docente_id', { 
        transaction 
      });

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
    }
  }
};
