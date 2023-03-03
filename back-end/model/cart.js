const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../data/index')

const Cart = sequelize.define('cart', {
    // Model attributes are defined here
    client_id: {
        type: DataTypes.NUMBER
    }
}, {
    // Other model options go here
});

module.exports = Article