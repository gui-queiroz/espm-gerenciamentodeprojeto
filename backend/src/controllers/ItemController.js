const Item = require('../models/Item');
const Produto = require('../models/Produto');
const Pedido = require('../models/Pedido');
const Mesa = require('../models/Mesa');
const PedidoController = require('./PedidoController');

module.exports = {
    async getAll(req, res) {
        const item = await Item.findAll();

        return res.json(item);
    },

    async create(req, res){
        const {idMesa, itens} = req.body;

        let result = [];
        let result2 = [];

        let valorTotal = 0;

        let idPedido;

        const produtos = await Produto.findAll();

        const pedidos = await Pedido.findAll();

        result2.push(JSON.stringify(pedidos))
        const objPedido = JSON.parse(result2)

        console.log(objPedido)

        objPedido.forEach(element => {
            if(element.idMesa == idMesa && element.status == 1){
                idPedido = element.id
            }
        });

        itens.forEach(element => {
            produtos.forEach(element2 => {
                if(element.idProduto == element2.id){
                    element.valor = element2.valorUnitario * element.quantidade
                    
                    valorTotal += element.valor;

                }
            });
        });
        
        itens.forEach(async element => {
            const item = await Item.create({idPedido, idProduto: element.idProduto, quantidade: element.quantidade, valor: element.valor});
        });

        Pedido.increment({valorFinal: +valorTotal}, {where: { id: idPedido }})

        const teste12313 = await PedidoController.getById(idPedido)

        return res.json(teste12313);
    },

    async update(req, res){
        const {idItem, idPedido, idProduto, quantidade, valor} = req.body;

        const item = await Item.update({idPedido, idProduto, quantidade, valor}, {returning: true, where: {id: idItem}});

        return res.json(item);
    }
};