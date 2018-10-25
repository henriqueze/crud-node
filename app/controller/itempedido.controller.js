const bd = require('../config/bd.config')
const ItemPedido = bd.itempedido

exports.create = (req, res) => {
    ItemPedido.create({
        valoritem: req.body.valoritem,
        quantidade: req.body.quantidade,
        valortotal: req.body.valortotal,
        pedido_codigo: req.body.pedido_codigo,
        produto_codigo: req.body.produto_codigo
    }).then(itempedido => {
        res.send(itempedido)
    })
}

exports.findAll = (req, res) => {
    ItemPedido.findAll().then(itempedido => {
        res.send(itempedido)
    })
}

exports.findById = (req, res) => {
    ItemPedido.findById(req.params.id).then(itempedido => {
        res.send(itempedido)
    })
}

exports.update = (req, res) => {
    ItemPedido.update({
        valoritem: req.body.valoritem,
        quantidade: req.body.quantidade,
        valortotal: req.body.valortotal,
        pedido_codigo: req.body.pedido_codigo,
        produto_codigo: req.body.produto_codigo
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
    ItemPedido.destroy({
        where: {codigo: req.params.id}
    }).then(() => {
        res.status(200).send({
            mensagem: 'Registro Deletado com Sucesso!'
        })
    })
}