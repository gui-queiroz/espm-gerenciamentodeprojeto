const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

//import model
const Estoque = require('../models/Estoque');
const Item = require('../models/Item');
const Mesa = require('../models/Mesa');
const Pedido = require('../models/Pedido');
const Produto = require('../models/Produto');

const connection = new Sequelize(dbConfig);

//init
Estoque.init(connection);
Item.init(connection);
Mesa.init(connection);
Pedido.init(connection);
Produto.init(connection);

module.exports = connection;