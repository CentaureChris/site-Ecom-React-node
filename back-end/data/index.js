const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './data/db.sqlite'
});

sequelize.authenticate().then(() => {

    console.log('Connection has been established successfully.');
}).catch(error => {

    console.error('Unable to connect to the database:', error);
})


module.exports = { sequelize }