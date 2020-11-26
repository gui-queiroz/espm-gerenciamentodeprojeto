'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('Estoque', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        descricao: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        quantidade: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        criado: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        atualizado: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('Estoque');

  }
};
