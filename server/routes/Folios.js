const express = require('express');
const app = express();

const Folio = require('../models/Folios');
const Estado = require('../models/Estado');

app.get('/folios', async(req, res) => {
    let folioInicio = req.query.folioInicio;
    let folioFin = req.query.folioFin || folioInicio;


    let folios = await Folio.find({
        folio: { $gte: folioInicio, $lte: folioFin }
    });

    res.json({
        ok: true,
        folios
    });
})

app.post('/folios', async(req, res) => {
    let body = req.body

    let estado = await Estado.findOne({
        estado: body.estado
    });

    Folio.create({
        folio: body.folio,
        tomos: body.tomos,
        oficios: body.oficios,
        referencias: body.referencias,
        estado
    }, (err, folioDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            })
        }
        return res.json({
            ok: true,
            folio: folioDB
        })
    })
})

module.exports = app;