const bd = require('../config/bd.config')
const Cliente = bd.cliente

exports.create = (req, res) => {
    Cliente.create({
        nome: req.body.nome,
        telefone: req.body.telefone,
        email: req.body.email,
        situacao: req.body.situacao
    }).then(cliente => {
        res.send(cliente)
    })
}

exports.findAll = (req, res) => {
    Cliente.findAll().then(cliente => {
        res.send(cliente)
    })
}

exports.findById = (req, res) => {
    Cliente.findById(req.params.id).then(cliente => {
        res.send(cliente)
    })
}

exports.update = (req, res) => {
    Cliente.update({
        nome: req.body.nome,
        email: req.body.email,
        telefone: req.body.telefone,
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
    Cliente.destroy({
        where: {codigo: req.params.id}
    }).then(() => {
        res.status(200).send({
            mensagem: 'Registro Deletado com Sucesso!'
        })
    })
}