const express = require('express')
const Usuario = require('../models/usuario')

const router = express.Router()

router.get('/', (req, res) => {
    
    Usuario.find({})
        .sort('-fecha')
        .exec((err, usuarios) => {
            if(err){
                return res.status(400).json({
                    ok: false,
                    err
                })
            }

            res.json({
                ok: true,
                usuarios
            })
        })

})

router.get('/:nombre', (req, res) => {

    let {nombre} = req.params
    
    Usuario.find({nombre})
        .sort('-fecha')
        .limit(10)
        .exec((err, usuarios) => {
            if(err){
                return res.status(400).json({
                    ok: false,
                    err
                })
            }

            res.json({
                ok: true,
                usuarios
            })
        })

})

router.get('/users', (req, res) => {
    
    Usuario.find({})
        .sort('-fecha')
        .limit(100)
        .exec((err, usuarios) => {
            if(err){
                return res.status(400).json({
                    ok: false,
                    err
                })
            }

            res.json({
                ok: true,
                usuarios
            })
        })

})




module.exports = router