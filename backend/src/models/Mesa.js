
const { Model, DataTypes } = require('sequelize');

class Mesa extends Model {
    static init(sequelize) {
        super.init({
            numero: DataTypes.NUMBER,
            status: DataTypes.NUMBER
        },{
            sequelize
        })
    }
}

module.exports = Mesa;