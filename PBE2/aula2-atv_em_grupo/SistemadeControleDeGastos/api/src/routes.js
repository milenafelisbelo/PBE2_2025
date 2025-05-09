const express = require('express');
const routes = express.Router();
const gastos = require('./controller/controllergastos');

routes.get('/', (req, res) => {
    res.send('API gastos Respondendo');
});

routes.post('/gastos', gastos.create);
routes.get('/gastos', gastos.read);
routes.delete('/gastos/:id', gastos.del);

module.exports = routes;