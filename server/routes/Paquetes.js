const express = require('express');
const app = express();

const Paquete = require('../models/Paquetes');

app.get('/paquete', (req, res) => {
    let noPaquete = req.query.noPaquete;

    Paquete.findOne({ noPaquete }, (err, paqueteDB) => {
        if (err) {
            res.status(500).json({
                ok: false,
                err
            })
        }
        return res.json({
            ok: true,
            paquete: paqueteDB
        })
    })
});

app.post('/paquete', (req, res) => {
    let body = req.body;

    let paquetito = new Paquete({
        noPaquete: body.noPaquete,
        folioFin: body.folioFin,
        folioInicio: body.folioInicio,
        fechaExpediente: body.fechaExpediente
    });

    paquetito.save((err, paqueteDB) => {
        if (err) {
            res.status(500).json({
                ok: false,
                err
            });
        }
        return res.json({
            ok: true,
            paquete: paqueteDB
        })
    })
})

app.put('/paquete', (req, res) => {
    let body = req.body;

    Paquete.findOneAndUpdate({ noPaquete: body.noPaquete }, body, { new: true }, (err, paqueteDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            })
        }
        return res.json({
            ok: true,
            paquete: paqueteDB
        })
    })
});

app.delete('/paquete', (req, res) => {
    let noPaquete = req.body.noPaquete

    Paquete.findOneAndDelete({ noPaquete }, (err, paqueteDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        return res.json({
            ok: true,
            paquete: paqueteDB
        })
    })
});


module.exports = app;