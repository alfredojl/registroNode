const express = require('express');
const app = express();

const Folio = require('../models/Folios');
const Estado = require('../models/Estado');

app.get('/folios', async(req, res) => {
    let folioInicio = req.query.folioInicio;
    let folioFin = req.query.folioFin || folioInicio;

    let noPaquete = req.query.noPaquete;


    if (folioInicio) {
        var folios = await Folio.find({
                folio: { $gte: folioInicio, $lte: folioFin }
            })
            .catch(err => {
                console.log(err);
                return res.status(500).json({
                    ok: false,
                    err
                })
            })
    } else {
        var folios = await Folio.find({
                noPaquete
            })
            .catch(err => {
                console.log(err);
                return res.status(500).json({
                    ok: false,
                    err
                })
            })
    }

    res.json({
        ok: true,
        folios
    });
})

app.post('/folios', async(req, res) => {
    let body = req.body.data

    Folio.insertMany(body.folios,
        (err, foliosDB) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    ok: false,
                    err
                })
            }
            res.json({
                ok: true,
                folios: foliosDB
            })

        })
})

app.put('/folios', async(req, res) => {
    let folios = req.body.data.folios;
    let noPaquete = req.body.noPaquete;
    let foliosResultado = [];
    let enes = [];

    for (bodi of folios) {
        console.log(bodi.folio);
        console.log(bodi.validado);
        var n = await Folio.findOneAndUpdate({ folio: bodi.folio }, bodi, (err, folioDB) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                })
            }

            foliosResultado.push(folioDB);
        })
        enes.push(n);
    }
    console.log(n);

    res.json({
        ok: true,
        foliosResultado
    })

})

module.exports = app;