
const { Model, DataTypes } = require('sequelize');

class Sensor extends Model {
    static init(sequelize) {
        super.init({
            idViagem: DataTypes.STRING,
            timestamp: DataTypes.BIGINT,
            aX: DataTypes.FLOAT,
            aY: DataTypes.FLOAT,
            aZ: DataTypes.FLOAT,
            gX: DataTypes.FLOAT,
            gY: DataTypes.FLOAT,
            gZ: DataTypes.FLOAT
        },{
            sequelize
        })
    }
}

module.exports = Sensor;