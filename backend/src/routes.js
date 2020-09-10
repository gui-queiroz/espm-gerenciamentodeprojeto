const express = require('express');
const SensorController = require('./controllers/SensorController');

const routes = express.Router();

//methods
//sensor
routes.post('/sensor', SensorController.criar);
routes.get('/sensor', SensorController.listar);

module.exports = routes;
