const Estoque = require('../models/Estoque');

module.exports = {
    async getAll(req, res) {
        const estoque = await Estoque.findAll();

        return res.json(estoque);
    },

    async create(req, res){
        const {descricao, quantidade} = req.body;

        const criado = Date.now();
        const atualizado = Date.now();

        const estoque = await Estoque.create({descricao, quantidade, criado, atualizado});

        return res.json(estoque);
    },

    async update(req, res){
        const {descricao, quantidade, idEstoque} = req.body;

        const estoque = await Estoque.update({descricao, quantidade}, {returning: true, where: {id: idEstoque}});

        return res.json(estoque);
    }
};