const mongoose = require('mongoose');
// const uniqueValidator = require('mongoose-unique-validator');


let Schema = mongoose.Schema;

let paqueteSchema = new Schema({
    noPaquete: {
        type: Number,
        required: [true, 'Paquete es necesario'],
        unique: true
    },
    folioInicio: {
        type: Number,
        required: true,
        unique: true
    },
    folioFin: {
        type: Number,
        required: true,
        unique: true
    },
    preparador: {
        type: String
    },
    verificador: {
        type: String
    },
    fechaExpediente: {
        type: Date,
        required: true
    },
    noFojas: {
        type: Number
    },
    fechaAlta: {
        type: Date
    },
    registrado: {
        type: String
    },
    validacion: {
        type: String
    },
    sellado: {
        type: String
    },
    cosido: {
        type: String
    }
});

// usuarioSchema.plugin(uniqueValidator, { message: '{PATH} ya existe, debe de ser único.' });


module.exports = mongoose.model('Paquete', paqueteSchema);