const express = require('express')
const bcrypt = require('bcrypt')
const Usuario = require('../models/usuario')

const router = express.Router()


router.post('/', (req, res) => {

    let {username, password} = req.body

    Usuario.findOne( {username}, (err, usuarioDB) =>{
        if(err){
            return res.status(400).json({
                ok: false,
                err
            })
        }
        console.log(usuarioDB)

        if(!usuarioDB){
            return res.json({
                ok: false,
                msg: 'Usuario y/o contraseña incorrectos'
            })
        }

        if(bcrypt.compareSync(password, usuarioDB.password) && username === usuarioDB.username){

            return res.json({
                ok: true,
                msg: 'Login exitoso!',
                usuarioDB
            })
        }

        return res.json({
            ok: false,
            msg: 'Usuario y/o contraseña incorrectos'
        })

    })
})


module.exports = router;