const express = require('express');
const app = express();

const Preparador = require('../models/Preparadores');
const Verificador = require('../models/Verificadores');

app.get('/preparador', (req, res) => {
    let name = req.query.name;
    Preparador.findOne({ name }, (err, preparadorDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            })
        }
        Verificador.populate(preparadorDB, { path: "verificador" }, (err, resultado) => {
            if (err)
                return res.status(500).json({
                    ok: false,
                    err
                });

            res.json({
                ok: true,
                resultado
            })
        })
    })

});

app.post('/preparador', async(req, res) => {
    let name = req.body.name
    let ver = req.body.vname

    var verificador = await Verificador.findOne({ name: ver });
    if (!verificador) {
        verificador = Verificador.create({ name: ver }, (err, verificadorDB) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                })
            }
            return verificadorDB
        })
    }
    res.json({
        verificador
    })

    console.log(typeof verificador, verificador);
    Preparador.create({
        name,
        verificador
    }, (err, preparadorDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        return res.json({
            ok: true,
            preparador: preparadorDB
        })
    });
});

app.put('/preparador', (req, res) => {
    let oldName = req.body.oldName;
    let newName = req.body.newName;
    Preparador.findOneAndUpdate({ name: oldName }, { name: newName }, { new: true }, (err, preparadorDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            })
        }

        return res.json({
            ok: true,
            preparador: preparadorDB
        })
    })
});

app.delete('/preparador', (req, res) => {
    let name = req.body.name

    Preparador.findOneAndDelete({ name }, (err, preparadorDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            })
        }

        return res.json({
            ok: true,
            preparador: preparadorDB
        })

    })
})

module.exports = app;