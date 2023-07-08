'use strict';

/** 
 * @type {import('sequelize-cli').Migration} 
 */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('pessoas', [
      {
        nome: 'João',
        ativo: true,
        email: 'joao@example.com',
        role: 'administrador',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Maria',
        ativo: false,
        email: 'maria@example.com',
        role: 'usuário',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Pedro',
        ativo: true,
        email: 'pedro@example.com',
        role: 'usuário',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Ana',
        ativo: true,
        email: 'ana@example.com',
        role: 'usuário',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Lucas',
        ativo: true,
        email: 'lucas@example.com',
        role: 'administrador',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Mariana',
        ativo: false,
        email: 'mariana@example.com',
        role: 'usuário',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Gabriel',
        ativo: true,
        email: 'gabriel@example.com',
        role: 'usuário',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Carolina',
        ativo: true,
        email: 'carolina@example.com',
        role: 'administrador',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Rafaela',
        ativo: false,
        email: 'rafaela@example.com',
        role: 'usuário',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Fernando',
        ativo: true,
        email: 'fernando@example.com',
        role: 'usuário',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, _) {
    await queryInterface.bulkDelete('pessoas', null, {});
  }
};
