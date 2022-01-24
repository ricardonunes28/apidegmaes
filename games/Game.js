const Sequelize = require('sequelize');
const connection = require('../database/database');

const Game = connection.define('games',{
    title:{
        type:Sequelize.STRING,
        allowNull: false
    },
    year:{
        type: Sequelize.STRING,
        allowNull: false
    },
    price:{
        type: Sequelize.STRING,
        allowNull:false
    }
})



module.exports = Game;