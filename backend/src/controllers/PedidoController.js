const Pedido = require('../models/Pedido');

module.exports = {
    async getAll(req, res) {
        const pedidos = await Pedido.findAll();

        return res.json(pedidos);
    },

    async create(req, res){
        const {idMesa, valorFinal, data} = req.body;

        const pedido = await Pedido.create({idMesa, valorFinal, data});

        return res.json(pedido);
    },

    async update(req, res){
        const {idPedido, idMesa, valorFinal, data} = req.body;

        const pedido = await Pedido.update({idMesa, valorFinal, data}, {returning: true, where: {id: idPedido}});

        return res.json(pedido);
    }
};