const express = require('express');
const Estoque = require('./controllers/EstoqueController');
const Item = require('./controllers/ItemController');
const Mesa = require('./controllers/MesaController');
const Pedido = require('./controllers/PedidoController');
const Produto = require('./controllers/ProdutoController');
const Home = require('./controllers/HomeController');

const routes = express.Router();

routes.post('/estoque', Estoque.create);
routes.get('/estoque', Estoque.getAll);
routes.put('/estoque', Estoque.update);

routes.post('/item', Item.create);
routes.get('/item', Item.getAll);
routes.put('/item', Item.update);

routes.post('/mesa', Mesa.create);
routes.get('/mesa', Mesa.getAll);
routes.get('/mesa/number', Mesa.getByNumber);
routes.put('/mesa', Mesa.update);

routes.post('/pedido', Pedido.create);
routes.get('/pedido', Pedido.getAll);
routes.put('/pedido', Pedido.update);

routes.post('/produto', Produto.create);
routes.get('/produto', Produto.getAll);

routes.get('/home', Home.get);
routes.post('/home/openTable/:id', Home.openTable);
routes.post('/home/closeTable/:id', Home.closeTable);

module.exports = routes;
