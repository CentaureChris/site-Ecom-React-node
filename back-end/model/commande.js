const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../data/index')

const Commande = sequelize.define('commande', {
    // Model attributes are defined here
    id_user: {
        type: DataTypes.NUMBER
    },
    statut: {
        type: DataTypes.STRING
        // allowNull defaults to true
    }
}, {
    // Other model options go here
});

module.exports = Commande