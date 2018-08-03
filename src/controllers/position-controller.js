'use strict'

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
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

exports.getAddress = async (req, res, next) => {

    console.log(req.params.latitude);
    console.log(req.params.longitude);

    try {
        return new Promise(function (resolve, reject) {
            var request = new XMLHttpRequest();

            var method = 'GET';
            var url = 'http://maps.googleapis.com/maps/api/geocode/json?latlng=' + req.params.latitude + ',' + req.params.longitude + '&sensor=true';
            var async = true;

            request.open(method, url, async);
            request.onreadystatechange = function () {
                if (request.readyState == 4) {
                    if (request.status == 200) {
                        var data = JSON.parse(request.responseText);
                        var address = data.results[0];
                        console.log(address);
                        resolve(address);
                        return res.status(200).send(address);
                    }
                    else {
                        console.log(request);
                        reject(request.status);
                        return res.status(200).send(request.status);
                    }
                }
            };
            request.send();
        });
    } catch (e) {
        res.status(500).send({
            message: "Falha ao processar a requisão."
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