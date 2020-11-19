
const { Model, DataTypes } = require('sequelize');

class Estoque extends Model {
    static init(sequelize) {
        super.init({
            descricao: DataTypes.STRING,
            quantidade: DataTypes.FLOAT,
            criado: DataTypes.DATE,
            atualizado: DataTypes.DATE
        },{
            sequelize
        })
    }
}

module.exports = Estoque;