const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../data/index')

const CommandeLine = sequelize.define('commande_line', {
    // Model attributes are defined here
    id_art: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    id_cart: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    qte: {
        type: DataTypes.NUMBER
        // allowNull defaults to true
    }
}, {
    // Other model options go here
});

module.exports = CommandeLine