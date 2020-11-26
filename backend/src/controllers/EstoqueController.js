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
        const {descricao, quantidade} = req.body;

        let idEstoque = req.params.id;

        let atualizado = Date.now();

        const estoqueAtualizar = await Estoque.update({descricao, quantidade, atualizado: atualizado}, {returning: true, where: {id: idEstoque}});
        
        const estoque = await Estoque.findByPk(idEstoque);
        return res.json(estoque);
    },

    async deletar(req, res){

        let idEstoque = req.params.id

        const estoque = Estoque.destroy({where: {id: idEstoque}})

        const itensEstoque = await Estoque.findAll()

        return res.json(itensEstoque);
    }
};