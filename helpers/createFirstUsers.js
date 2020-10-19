const Usuario = require('../server/models/user');
const bcrypt = require('bcrypt');

const crearUsuario = () => {
    const name = "admin";
    const passwd = "root";

    bcrypt.hashSync(passwd, 10);

    Usuario.create({
        name,
        passwd
    }, (err, usuarioDB) => {
        if (err)
            console.log(err);
        console.log(usuarioDB);
    })
}

crearUsuario();