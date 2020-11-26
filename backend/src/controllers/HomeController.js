const Estoque = require('../models/Estoque');
const Pedido = require('../models/Pedido');
const Mesa = require('../models/Mesa');
const Item = require('../models/Item');
const Produto = require('../models/Produto');
const Financeiro = require('../models/Financeiro');

module.exports = {
    async get(req, res) {
        let result = [];
        let result2 = [];
        let result3 = [];
        let result4 = [];

        const mesa = await Mesa.findAll();
        const pedido = await Pedido.findAll();
        const item = await Item.findAll();
        const produto = await Produto.findAll();

        result.push(JSON.stringify(mesa))
        result2.push(JSON.stringify(pedido))
        result3.push(JSON.stringify(item))
        result4.push(JSON.stringify(produto))

        const objMesa = JSON.parse(result)
        const objPedido = JSON.parse(result2)
        const objItem = JSON.parse(result3)
        const objProduto = JSON.parse(result4)

        objMesa.forEach(mesaData => {
            mesaData.pedidos = [];
            objPedido.forEach(pedidoData => {
                if(mesaData.id == pedidoData.idMesa && pedidoData.status == 1){
                    mesaData.pedidos.push(pedidoData)
                }
                pedidoData.itens = [];
                objItem.forEach(itemData => {

                    if(itemData.idPedido == pedidoData.id){
                        objProduto.forEach(produtoData => {
                            if(itemData.idProduto == produtoData.id){
                                 itemData.produto = produtoData.descricao
                            }
                        });

                        pedidoData.itens.push(itemData)
                    }
                });
            });
        });

        return res.json(objMesa);
    },

    async openTable(req, res) {

        const open = await Mesa.update(
            { status: 1 },
            { where: { id: req.params.id } }
          )

        let pedido = await Pedido.create({idMesa: req.params.id , valorFinal: 0, status: 1, data: Date.now()});

        let mesa = await Mesa.findByPk(req.params.id)

        mesa = JSON.stringify(mesa)
        mesa = JSON.parse(mesa)

        pedido = JSON.stringify(pedido)
        pedido = JSON.parse(pedido)

        mesa.pedido = pedido

        return res.json(mesa);
    },

    async closeTable(req, res) {

        const close = await Mesa.update(
            { status: 0 },
            { where: { id: req.params.id } }
          )

        const closePedido = await Pedido.update(
        { status: 0 },
        { where: { idMesa: req.params.id } }
        )

        console.log(closePedido)

        const criado = Date.now()

        const pedido = await Pedido.findByPk(1)

        await Financeiro.create({descricao: "pagamento", valor: pedido.valorFinal, operacao: "entrada", criado})

        const mesa = await Mesa.findByPk(req.params.id)

        return res.json(mesa);
    }
};