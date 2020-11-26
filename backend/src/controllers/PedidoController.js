const Pedido = require('../models/Pedido');
const Item = require('../models/Item');

module.exports = {
    async getAll(req, res) {
        const pedidos = await Pedido.findAll();

        return res.json(pedidos);
    },

    async getById(id) {
        let result = [];
        let result2 = [];
        
        const pedidos = await Pedido.findByPk(id);

        result.push(JSON.stringify(pedidos))

        const objPedido = JSON.parse(result)

        const item = await Item.findAll({where: {idPedido: id}});

        result2.push(JSON.stringify(item))
        const objItem = JSON.parse(result2)

        objPedido.itens = [];

        objPedido.itens = objItem

        
        return objPedido;
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