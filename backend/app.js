const express = require('express')
const bodyParser = require('body-parser')

const server = express()
server.use(bodyParser.json())

const bd = require('./app/config/bd.config')

bd.connection.sync({force: false}).then(() => {
    console.log('Conexão e Criação de tabelas concluidas com sucesso...')
    console.log('Para forçar o drop das tabelas, ativar a função force: {force: true}')
})

require('./app/route/cliente.route')(server)
require('./app/route/produto.route')(server)
require('./app/route/pedido.route')(server)
require('./app/route/itempedido.route')(server)


server.listen(3000, () =>{
    console.log('Aplicação rodando em http://localhost:3000')
    console.log('Para encerrar a aplicação: CTRL + C')
})


