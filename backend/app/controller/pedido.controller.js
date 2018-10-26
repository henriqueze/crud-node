const bd = require('../config/bd.config')
const Pedido = bd.pedido

exports.create = (req, res) => {
    Pedido.create({
        valortotal: req.body.valortotal,
        data: req.body.data,
        situacao: req.body.situacao,
        cliente_codigo: req.body.cliente_codigo
    }).then(pedido => {
        res.send(pedido)
    })
}

exports.findAll = (req, res) => {
    Pedido.findAll().then(pedido => {
        res.send(pedido)
    })
}

exports.findById = (req, res) => {
    Pedido.findById(req.params.id).then(pedido => {
        res.send(pedido)
    })
}

exports.update = (req, res) => {
    Pedido.update({
        valortotal: req.body.valortotal,
        data: req.body.data,
        situacao: req.body.situacao
    }, 
    {
        where: {codigo: req.params.id}    
    }).then(() => {
        res.status(200).send({
            mensagem: 'Registro Alterado com Sucesso!'
        })
    })
}

exports.delete = (req, res) => {
    Pedido.destroy({
        where: {codigo: req.params.id}
    }).then(() => {
        res.status(200).send({
            mensagem: 'Registro Deletado com Sucesso!'
        })
    })
}