module.exports = (server) => {
    const clienteController = require('../controller/cliente.controller')
    server.post('/api/clientes', clienteController.create)
    server.get('/api/clientes', clienteController.findAll)
    server.get('/api/clientes/:id', clienteController.findById)
    server.put('/api/clientes/:id', clienteController.update)
    server.delete('/api/clientes/:id', clienteController.delete)
}