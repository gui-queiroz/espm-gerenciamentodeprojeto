'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('Item', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        idPedido: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        idProduto: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        quantidade: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        valor: {
          type: Sequelize.FLOAT,
          allowNull: false,
        }
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('Item');

  }
};
