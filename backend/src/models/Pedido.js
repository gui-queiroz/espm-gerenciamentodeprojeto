
const { Model, DataTypes } = require('sequelize');

class Pedido extends Model {
    static init(sequelize) {
        super.init({
            idMesa: DataTypes.INTEGER,
            valorFinal: DataTypes.FLOAT,
            data: DataTypes.DATE    
        },{
            sequelize
        })
    }
}

module.exports = Pedido;