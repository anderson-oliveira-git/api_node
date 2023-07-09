'use strict';

/** 
 * @type {import('sequelize-cli').Migration} 
 */
module.exports = {
  async up (queryInterface, _) {
    await queryInterface.bulkInsert('matriculas', [
      {
        status: "confirmado",
        estudante_id: 1,
        turma_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: "confirmado",
        estudante_id: 2,
        turma_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: "confirmado",
        estudante_id: 3,
        turma_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: "confirmado",
        estudante_id: 4,
        turma_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: "cancelado",
        estudante_id: 1,
        turma_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: "cancelado",
        estudante_id: 2,
        turma_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }], 
    {});
  },

  async down (queryInterface, _) {
    await queryInterface.bulkDelete('matriculas', null, {});
  }
};
