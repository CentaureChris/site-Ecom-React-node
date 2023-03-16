const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../data/index.js')

const Article = sequelize.define('article', {
    // Model attributes are defined here
    nom: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    description: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    prix: {
        type: DataTypes.REAL
        // allowNull defaults to true
    },
    photo: {
        type: DataTypes.STRING
    }
}, {
    // Other model options go here
});

module.exports = Article