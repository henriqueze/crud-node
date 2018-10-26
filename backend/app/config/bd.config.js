const Sequelize = require('sequelize')
const acesso = require('./bd.acesso')

const connection = new Sequelize(acesso.database, acesso.username, acesso.password, {
    host: acesso.host,
    dialect: acesso.dialect
})

const bd = {}
bd.Sequelize = Sequelize
bd.connection = connection 

bd.cliente = require('../model/cliente.model')(connection, Sequelize)
bd.produto = require('../model/produto.model')(connection, Sequelize)
bd.pedido = require('../model/pedido.model')(connection, Sequelize)
bd.itempedido = require('../model/itemPedido.model')(connection, Sequelize)

bd.pedido.belongsTo(bd.cliente)
bd.itempedido.belongsTo(bd.pedido)
bd.itempedido.belongsTo(bd.produto)

module.exports = bd

