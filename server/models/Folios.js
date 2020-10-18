const mongoose = require('mongoose');

// const uniqueValidator = require('mongoose-unique-validator');


let Schema = mongoose.Schema;

let foliosSchema = new Schema({
    folio: {
        type: Number,
        required: true
    },
    tomos: {
        type: Number
    },
    oficios: {
        type: String
    },
    referencias: {
        type: String
    },
    estado: {
        type: Schema.ObjectId,
        ref: "Estado"
    },
    noPaquete: {
        type: Schema.ObjectId,
        ref: "Paquete"
    }
});

// usuarioSchema.plugin(uniqueValidator, { message: '{PATH} ya existe, debe de ser único.' });


module.exports = mongoose.model('Folio', foliosSchema);