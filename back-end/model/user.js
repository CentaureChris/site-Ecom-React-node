const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../data/index.js')

const User = sequelize.define('utilisateur', {
    // Model attributes are defined here
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pass: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    nom: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    prenom: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    adresse: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    code_postal: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    ville: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    niveau: {
        type: DataTypes.NUMBER,
        defaultValue: 0
    }
}, {
    // Other model options go here
});

module.exports = User