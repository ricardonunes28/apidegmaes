const express = require('express');
const router = express.Router();
const Game = require('./Game');



/**
 * Rota do tipo get nessa para pegar dados, no caso todos os games do meu banco de dados!
 */
router.get('/games', (req, res) => {

    Game.findAll().then((games) => {
        if (games.length == 0) {
            res.sendStatus(404)
        }
        res.statusCode = 200; // ststus code 200 = Tudo ocorreu com sucesso!
        res.json(games);
    })

});

/**
//  * Cadastrando um game!
//  */

router.post('/game', (req, res) => {
    var title = req.body.title;
    var year = req.body.year;
    var price = req.body.price;

    if (titulo != undefined) {
        if (!isNaN(year)) {
            if (!isNaN(price)) {
                Game.create({
                    title,
                    year,
                    price
                }).then(() => {
                    res.sendStatus(200)
                })
            } else {
                res.sendStatus(400)
            }
        } else {
            res.sendStatus(400)
        }
    } else {
        res.sendStatus(400)
    }
})

/**
//  * pegando o id de cada game para passar na tela!
//  */

router.get('/game/:id', (req, res) => {
    // filtrando os dados
    if (isNaN(req.params.id)) {
        res.sendStatus(400)
    } else {

        var id = req.params.id;

        Game.findByPk(id).then(games => {
            if (games != undefined) {
                res.statusCode = 200
                res.json(games)
            } else {
                res.sendStatus(404)
            }
        })
    }
})

/**
 * Rota para deletar da api as informações os jogos. router.delete
 */

router.delete('/game/:id', (req, res) => {
    // filtrando os dados
    var id = req.params.id
    if (!isNaN(id) || id != undefined) {
        Game.destroy({
            where: {
                id: id
            }
        }).then(() => {
            res.sendStatus(200)
        }).catch((erro) => {
            console.log(erro)
            res.sendStatus(404)
        })

    } else {
        res.sendStatus(400)
    }
})

router.put('/game/:id', (req, res) => {
    if(isNaN(req.params.id)){
        res.sendStatus(400);
    }else{
        
        var id = parseInt(req.params.id);
        console.log("-->"+id)
 
            var {titulo, year, price} = req.body;
         
            Game.findOne({
                where:{id :id},
            })
            .then((games) => {
                if(games != undefined){
                   Game.update({
                       titulo: titulo,
                       price: price,
                       year: year
                   },{where:{id :id}})
                }
            })
    }
 
})


module.exports = router;