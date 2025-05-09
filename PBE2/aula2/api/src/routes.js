const express = require('express')
const routes = express.Router()

const clientes = require ('./controller/controllerclientes')

routes.get('/', (req,res) => {
    res.send('API RESTful - Clientes')
})

routes.post('/clientes', clientes.create)
routes.get('/clientes', clientes.read)

module.exports = routes