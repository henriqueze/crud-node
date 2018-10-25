module.exports = (connection, Sequelize) => {
    const produto = connection.define('produto', {
        codigo: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        descricao:{
            type: Sequelize.STRING(200)
        },
        valor: {
            type:  Sequelize.DECIMAL(10,2)
            },
        situacao: {
            type: Sequelize.STRING(1)
        }
        
    })

    return produto
}