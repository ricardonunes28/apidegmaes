const Sequelize = require('sequelize');

const connection = new Sequelize('api_game','root','admin',{
    host: 'localhost',
    dialect:'mysql',
    timezone:'-03:00'
})

module.exports  = connection;