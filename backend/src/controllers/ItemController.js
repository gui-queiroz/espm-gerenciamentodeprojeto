const Item = require('../models/Item');

module.exports = {
    async getAll(req, res) {
        const item = await Item.findAll();

        return res.json(item);
    },

    async create(req, res){
        const {idPedido, idProduto, quantidade, valor} = req.body;

        const item = await Item.create({idPedido, idProduto, quantidade, valor});

        return res.json(item);
    },

    async update(req, res){
        const {idItem, idPedido, idProduto, quantidade, valor} = req.body;

        const item = await Item.update({idPedido, idProduto, quantidade, valor}, {returning: true, where: {id: idItem}});

        return res.json(item);
    }
};