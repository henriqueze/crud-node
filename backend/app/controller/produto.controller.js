const bd = require('../config/bd.config')
const Produto = bd.produto

exports.create = (req, res) => {
    Produto.create({
        descricao: req.body.descricao,
        valor: req.body.valor,
        situacao: req.body.situacao
    }).then(produto => {
        res.send(produto)
    })
}

exports.findAll = (req, res) => {
    Produto.findAll().then(produto => {
        res.send(produto)
    })
}

exports.findById = (req, res) => {
    Produto.findById(req.params.id).then(produto => {
        res.send(produto)
    })
}

exports.update = (req, res) => {
    Produto.update({
        descricao: req.body.descricao,
        valor: req.body.valor,
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
    Produto.destroy({
        where: {codigo: req.params.id}
    }).then(() => {
        res.status(200).send({
            mensagem: 'Registro Deletado com Sucesso!'
        })
    })
}