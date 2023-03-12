const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../data/index')

const OrderLine = sequelize.define('commande_line', {
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