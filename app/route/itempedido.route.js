module.exports = (server) => {
    const itempedidoController = require('../controller/itempedido.controller')
    server.post('/api/itempedidos', itempedidoController.create)
    server.get('/api/itempedidos', itempedidoController.findAll)
    server.get('/api/itempedidos/:id', itempedidoController.findById)
    server.put('/api/itempedidos/:id', itempedidoController.update)
    server.delete('/api/itempedidos/:id', itempedidoController.delete)
}   