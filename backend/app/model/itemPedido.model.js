module.exports = (connection, Sequelize) => {
    const itemPedido = connection.define('itempedido', {
        codigo: {
            type: Sequelize.INTEGER, 
            primaryKey: true, 
            autoIncrement: true
        },
        valoritem: {
            type: Sequelize.DECIMAL(10,2)
        },
        quantidade: {
            type: Sequelize.INTEGER
        },
        valortotal: {
            type: Sequelize.DECIMAL(10,2)
        }
    }, {underscored: true})

    return itemPedido
}