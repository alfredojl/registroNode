const express = require('express');
const app = express();

const Paquete = require('../models/Paquetes');
const Folio = require('../models/Folios');

app.get('/paquete', (req, res) => {
    let noPaquete = req.query.noPaquete;

    Paquete.findOne({ noPaquete }, (err, paqueteDB) => {
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

app.post('/paquete', async(req, res) => {
    let body = req.body.data;
    let noPaquete = body.noPaquete;

    Paquete.updateOne({ noPaquete }, body, { upsert: true }, async(err, paqueteDB) => {
        console.log('callback funcionando');
        if (err) {
            console.log('no encontrado');
            return res.status(500).json({
                ok: false,
                err
            })
        }

        let folios = [];
        for (let i = folioInicio; i <= folioFin; i++) {
            let folio = {
                folio: i,
                noPaquete: noPaquete
            }
            folios.push(folio);
        };

        await Folio.insertMany(folios, (err, resultado) => {
            if (err) {
                Paquete.remove({ noPaquete });
                return res.status(500).json({
                    ok: false,
                    err
                });
            }
        })
        return res.json({
            ok: true,
            paquete: paqueteDB
        });
    })
})

app.put('/paquete', async(req, res) => {
    let noPaquete = req.body.data.noPaquete;
    let folioInicio = req.body.data.folioInicio;
    let folioFin = req.body.data.folioFin;
    let fechaExpediente = req.body.data.fechaExpediente;
    let registrado = req.body.data.registrado;
    let oldNoPaquete = req.body.data.oldNoPaquete;

    console.log(folioInicio, folioFin)
    await Paquete.updateOne({ noPaquete: oldNoPaquete }, {
        noPaquete,
        folioInicio,
        folioFin,
        fechaExpediente,
        registrado
    }, { new: true }, async(err, paqueteDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            })
        }
        await Folio.deleteMany({ noPaquete }, (err, fol) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    err: {
                        message: 'Error al eliminar folios'
                    }
                })
            }
        });
        let folios = [];
        for (let i = folioInicio; i <= folioFin; i++) {
            let folio = {
                folio: i,
                noPaquete: noPaquete
            }
            folios.push(folio);
        };

        await Folio.insertMany(folios, (err, resultado) => {
            if (err) {
                Paquete.remove({ noPaquete });
                return res.status(500).json({
                    ok: false,
                    err
                });
            }
        })
        return res.json({
            ok: true,
            paquete: paqueteDB
        })
    })
});

app.delete('/paquete', (req, res) => {
    let noPaquete = req.query.noPaquete;

    Paquete.findOneAndDelete({ noPaquete }, (err, paqueteDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        Folio.deleteMany({ noPaquete }, (err, folioDB) => {
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
})
module.exports = app;