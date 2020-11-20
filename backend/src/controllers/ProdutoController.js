const Produto = require('../models/Produto');

module.exports = {
    async getAll(req, res) {
        const produtos = await Produto.findAll();

        return res.json(produtos);
    },

    async create(req, res){
        const {descricao, valorUnitario} = req.body;

        const pedido = await Produto.create({descricao, valorUnitario});

        return res.json(pedido);
    }
};