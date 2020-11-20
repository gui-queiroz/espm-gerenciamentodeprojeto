
const { Model, DataTypes } = require('sequelize');

class Produto extends Model {
    static init(sequelize) {
        super.init({
            descricao: DataTypes.STRING,
            valorUnitario: DataTypes.FLOAT
        },{
            sequelize
        })
    }
}

module.exports = Produto;