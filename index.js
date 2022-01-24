const express = require('express')
const app = express()

//Importando rotas de controller
const GamesController = require('./games/GamesController');

//Importando conmection com o banco de dados
const connection = require('./database/database');

// Importação de model
const Game = require('./games/Game');
// DataBase

connection
.authenticate()
.then(()=>{
    console.log('Connection success!')
}).catch((error)=>{
    console.log(error)
})


const port = 4000

// Rota sem prefixo
app.use('/',GamesController);

app.use(express.urlencoded({ extended: true }))
app.use(express.json())



app.listen(port, () => {
    console.log(`Rodando na porta: ${port}`)
})