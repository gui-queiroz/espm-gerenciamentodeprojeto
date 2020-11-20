const Mesa = require('../models/Mesa');

module.exports = {
    async getAll(req, res) {
        const mesas = await Mesa.findAll();

        return res.json(mesas);
    },

    async getByNumber(req, res) {
        const {numero} = req.body;

        const mesa = await Mesa.findOne({ where: {numero} })

        return res.json(mesa);
    },

    async create(req, res){
        const {numero} = req.body;

        const mesa = await Mesa.create({numero});

        return res.json(mesa);
    },

    async update(req, res){
        const {numero, status} = req.body;

        const mesa = await Mesa.update({status}, {returning: true, where: {numero}});

        return res.json(mesa);
    }
};