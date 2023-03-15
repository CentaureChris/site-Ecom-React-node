const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../data/index.js')

const Order = sequelize.define('order', {
    // Model attributes are defined here
    id_user: {
        type: DataTypes.NUMBER
    },
    amount: {
        type: DataTypes.REAL
    },
    state: {
        type: DataTypes.NUMBER,
    },
}, {
    // Other model options go here
});

module.exports = Order