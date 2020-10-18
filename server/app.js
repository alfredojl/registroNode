require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const cors = require('cors');

const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(cors());

//Configuración global de rutas.
app.use(require('./routes/index'));

// Habilitar el HTML
app.use(express.static(path.resolve(__dirname, '../public')));

mongoose.connect(process.env.URLDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}, (err, res) => {
    if (err) throw err;
    console.log("BD ONLINE");
});

app.listen(process.env.PORT, () => console.log(`Escuchando puerto `, process.env.PORT));