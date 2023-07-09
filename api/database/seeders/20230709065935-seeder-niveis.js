'use strict';

/** 
 * @type {import('sequelize-cli').Migration} 
 */
module.exports = {
  async up (queryInterface, _) {
    await queryInterface.bulkInsert('nivels', [
      {
        desc_nivel: 'básico',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        desc_nivel: 'intermediário',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        desc_nivel: 'avançado',
        createdAt: new Date(),
        updatedAt: new Date()
      } 
     ], {});
  },

  async down (queryInterface, _) {
     await queryInterface.bulkDelete('nivels', null, {});
  }
};
