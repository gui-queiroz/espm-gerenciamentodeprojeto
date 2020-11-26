
const { Model, DataTypes } = require('sequelize');

class Pedido extends Model {
    static init(sequelize) {
        super.init({
            idMesa: DataTypes.INTEGER,
            valorFinal: DataTypes.FLOAT,
            data: DataTypes.DATE,
            status: DataTypes.INTEGER
        },{
            sequelize
        })
    }
}

module.exports = Pedido;