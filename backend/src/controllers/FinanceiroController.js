const Financeiro = require('../models/Financeiro');

module.exports = {
    async getAll(req, res) {
        const financeiro = await Financeiro.findAll();

        return res.json(financeiro);
    },

    async create(req, res){
        const {descricao, valor, operacao} = req.body;

        const criado = Date.now();

        const financeiro = await Financeiro.create({descricao, valor, operacao, criado});

        return res.json(financeiro);
    },

    async update(req, res){
        const {descricao, valor, operacao} = req.body;

        let idEstoque = req.params.id;

        const financeiro = await Financeiro.update({descricao, quantidade, valor, operacao, atualizado: atualizado}, {returning: true, where: {id: idEstoque}});
        
        return res.json(financeiro);
    },

    async deletar(req, res){

        let idFinanceiro = req.params.id

        const financeiro = await Financeiro.destroy({where: {id: idFinanceiro}})

        const itensEstoque = await Financeiro.findAll()

        return res.json(itensEstoque);
    }
};