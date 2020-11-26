
const { Model, DataTypes } = require('sequelize');

class Financeiro extends Model {
    static init(sequelize) {
        super.init({
            descricao: DataTypes.STRING,
            valor: DataTypes.STRING,
            operacao: DataTypes.STRING,
            criado: DataTypes.DATE,
        },{
            sequelize
        })
    }
}

module.exports = Financeiro;