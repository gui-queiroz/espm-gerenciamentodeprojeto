const Sensor = require('../models/Sensor');

module.exports = {
    async listar(req, res) {
        const sensor = await Sensor.findAll();

        return res.json(sensor);
    },

    async criar(req, res){
        const {idViagem, timestamp, aX, aY, aZ, gX, gY, gZ} = req.body;

        const sensor = await Sensor.create({idViagem, timestamp, aX, aY, aZ, gX, gY, gZ});

        return res.json(sensor);
    }
};