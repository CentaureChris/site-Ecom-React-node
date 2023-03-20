const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../data/index.js')

const OrderLine = sequelize.define('order_lines', {
    // Model attributes are defined here
    id_art: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    id_order: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    qty: {
        type: DataTypes.NUMBER
        // allowNull defaults to true
    },
    price: {
        type: DataTypes.FLOAT
    }

}, {
    // Other model options go here
});

module.exports = OrderLine