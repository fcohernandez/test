const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Es necesario un nombre de usuario']
    },
    nombre: {
        type: String,
        required: [true, 'Es necesario un nombre de usuario']
    },
    password: {
        type: String,
        required: [true, 'Es necesaria una contraseña']
    },
    fecha: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Usuario', usuarioSchema);