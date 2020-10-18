const Verificador = require('../server/models/Verificadores');
const Preparadores = require('../server/models/Preparadores');
const Digitalizadores = require('../server/models/Digitalizadores');

const vesveri = require('./VesVerificadores.json');
const vesprepa = require('./VesPreparadores.json');
const matveri = require('./MatVerificadores.json');
const matprepa = require('./MatPreparadores.json');
const digi = require('./Digitalizadores.json');

const install = async() => {
    let v = await Verificador.insertMany(vesveri);
    if (!v)
        throw new Error('Vacío');
    console.log(v);
    // let vespertinos = 0;
    // let matutinos = 0;
    // let dd = 0;
    // for (verificador of vesveri) {
    //     console.log(verificador);
    //     await Verificadores.create({
    //             name: verificador,
    //             turno: 'Vespertino'
    //         },
    //         (err, resultado) => {
    //             console.log('error');
    //             if (err) {
    //                 throw new Error(err);
    //             }
    //             console.log(resultado);
    //             vespertinos++;
    //         });
    // }
    // for (verificador of matveri) {
    //     await Verificadores.create({
    //         name: verificador,
    //         turno: 'Matutino'
    //     }, (err, resultado) => {
    //         if (err)
    //             throw new Error(err);
    //         console.log(resultado);
    //         matutinos++;
    //     });
    // }
    // for (preparador of vesprepa) {
    //     await Preparadores.create({
    //         name: preparador,
    //         turno: 'Matutino'
    //     }, (err, resultado) => {
    //         if (err)
    //             throw new Error(err);
    //         console.log(resultado);
    //         vespertinos++;
    //     });
    // }
    // for (preparador of matprepa) {
    //     await Preparadores.create({
    //         name: preparador,
    //         turno: 'Matutino'
    //     }, (err, resultado) => {
    //         if (err)
    //             throw new Error(err);
    //         console.log(resultado);
    //         matutinos++;
    //     });
    // }
    // for (digitalizador of digi) {
    //     console.log('fi');
    //     Digitalizadores.create({
    //         name: digitalizador
    //     }, (err, resultado) => {
    //         console.log('foo');
    //         if (err)
    //             throw new Error(err);
    //         console.log(resultado);
    //         dd++;
    //     });
    // }
    // console.log('Vespertinos: ', vespertinos);
    // console.log('Matutinos: ', matutinos);
    // console.log('Digitalizadores: ', dd);

};

install();