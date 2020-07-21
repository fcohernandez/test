const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const usuario = require('./routes/usuario')
const login = require('./routes/login')
const register = require('./routes/register')

const app = express()

app.use(bodyParser.json())

app.use('/usuarios', usuario)
app.use('/login', login)
app.use('/register', register)

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("conexion exitosa")
});

app.listen(3000, () => {
    console.log("escuchando puerto 3000")
})