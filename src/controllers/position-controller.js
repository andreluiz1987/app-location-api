'use strict'

const mongoose = require('mongoose');
const Position = require('../models/Position');
const repo = require('../repositories/position-repository');

exports.getPositions = async (req, res, next) => {

    try {
        var data = await repo.getPositions();
        return res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: "Falha ao processar a requisão GetPositions."
        })
    }
};

exports.insertPosition = (data) => {
    repo
        .create(data)
        .then(x => {
            console.log("Registro de posição cadastrada com sucesso!");
        })
        .catch(e => {
            console.log(e);
        });
};

exports.post = async (req, res, next) => {

    console.log(req.body.latitude);

    await repo.create(req.body)
        .then(x => {
            res.status(201).send({
                message: "Posição registrada!"
            });
        })
        .catch(e => {
            res.status(400).send({
                message: "Falha ao registrar a posição",
                data: e
            });
        });
};