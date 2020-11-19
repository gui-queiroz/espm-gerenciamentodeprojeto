
const { Model, DataTypes } = require('sequelize');

class Item extends Model {
    static init(sequelize) {
        super.init({
            idPedido: DataTypes.INTEGER,
            idProduto: DataTypes.INTEGER,
            quantidade: DataTypes.INTEGER,
            valor: DataTypes.FLOAT    
        },{
            sequelize
        })
    }
}

module.exports = Item;