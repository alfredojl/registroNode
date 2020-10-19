const Usuario = require('../server/models/user');
const bcrypt = require('bcrypt');

const mongoose = require('mongoose');


require('../server/config/config');

mongoose.connect('mongodb://localhost:27017/registro', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}, (err, res) => {
    if (err) throw err;
    console.log("BD ONLINE");
});

const crearUsuario = async() => {
    const name = "root";
    const passwdprov = "admin";

    const passwd = bcrypt.hashSync(passwdprov, 10);

    await Usuario.create({
            name: name,
            passwd: passwd
        })
        .then(usuarioDB => {
            console.log('Usuario "root" creado con éxito.');
        })
        .catch(err => {
            console.log(err);
        })
    process.exit();
};

crearUsuario();