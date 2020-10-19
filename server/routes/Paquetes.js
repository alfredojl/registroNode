const express = require('express');
const app = express();

const Paquete = require('../models/Paquetes');
const Folio = require('../models/Folios');

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
    let body = req.body.data;

    let paquetito = new Paquete({
        noPaquete: body.noPaquete,
        folioFin: body.folioFin,
        folioInicio: body.folioInicio,
        fechaExpediente: body.fechaExpediente,
        fechaAlta: body.fechaAlta,
        registrado: body.registrado,
        validado: body.validado
    });

    paquetito.save((err, paqueteDB) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                ok: false,
                err
            });
        }
        let folios = [];
        for (let i = body.folioInicio; i <= body.folioFin; i++) {
            let folio = {
                folio: i,
                noPaquete: body.noPaquete
            }
            folios.push(folio);
        };

        Folio.insertMany(folios, (err, resultado) => {
            if (err) {
                Paquete.remove({ noPaquete: body.noPaquete });
                console.log(err);
                return res.status(500).json({
                    ok: false,
                    err
                });
            }
            return res.json({
                ok: true,
                paquete: paqueteDB
            })
        });
    })
})

app.put('/paquete', (req, res) => {
    let body = req.body;

    console.log(body);

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