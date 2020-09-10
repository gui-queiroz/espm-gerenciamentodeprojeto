const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

//import model
const Sensor = require('../models/Sensor');

const connection = new Sequelize(dbConfig);

//init
Sensor.init(connection);

module.exports = connection;