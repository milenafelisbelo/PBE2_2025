const express = require('express');
const routes = express.Router();

const Pedido = require('./controllers/pedido')
const Pizza = require('./controllers/pizza')
const Cliente = require('./controllers/cliente')
const Item = require('./controllers/item')

routes.get('/pedido', Pedido.read)
routes.post('/pedido', Pedido.create)
routes.get('/pedido/:id', Pedido.update)
routes.get('/pedido/:id', Pedido.readOne)
routes.delete('/pedido/:id', Pedido.remove)

routes.get('/pizza', Pizza.read)
routes.post('/pizza', Pizza.create)
routes.put('/pizza/:id', Pizza.update)
routes.delete('/pizza/:id', Pizza.remove)

routes.get('/cliente', Cliente.read)
routes.post('/cliente', Cliente.create)
routes.put('/cliente/:id', Cliente.update)
routes.delete('/cliente/:id', Cliente.remove)

routes.get('/item', Item.read)
routes.post('/item', Item.create)
routes.put('/item/:id', Item.update)
routes.delete('/item/:id', Item.remove)

routes.get('/', (req, res) => {
    return res.json({ titulo: ' Pizzaria Ginno e Silva' });
  });

module.exports = routes;