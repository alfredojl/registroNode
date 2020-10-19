const Usuario = require('../server/models/user');
const bcrypt = require('bcrypt');

const crearUsuario = async() => {
    const name = "admin";
    const passwdprov = "root";

    const passwd = bcrypt.hashSync(passwdprov, 10);

    await Usuario.create({
        name,
        passwd
    }, (err, usuarioDB) => {
        if (err)
            console.log(err);
        console.log(usuarioDB);
    })
}

crearUsuario();