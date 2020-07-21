const express = require('express')
const bcrypt = require('bcrypt')
const Usuario = require('../models/usuario')

const router = express.Router()


router.post('/', (req, res) => {
    let body = req.body
    let username = req.body.username

    let usuario = new Usuario({
        username: body.username,
        nombre: body.nombre,
        password: bcrypt.hashSync(body.password, 10)
    })

    Usuario.findOne( {username}, (err, usuarioDB) =>{
        if(err){
            return res.status(400).json({
                ok: false,
                err
            })
        }

        if(usuarioDB){
            return res.json({
                ok: false,
                msg: 'El nombre de usuario ya está en uso'
            })
        }

        usuario.save( (err, userDB) => {
            if(err){
                return res.status(400).json({
                    ok: false,
                    msg: 'Error al crear usuario',
                    err
                })
            }
    
            return res.json({
                ok: true,
                msg: 'Usuario creado con éxito',
                usuarioDB: userDB
            })
        })

    })

})



module.exports = router