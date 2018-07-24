'use strict'

const mongoose = require('mongoose');
const express = require('express');
var bodyParser = require('body-parser')
const app = express();

mongoose.connect("mongodb://andrecoelho:andre1502@ds143451.mlab.com:43451/lab_position_arduino", { useNewUrlParser: true });

const Position = require('../src/models/Position');
const indexRoute = require('../src/routes/index');
const positionRoute = require('../src/routes/position-route');
7
app.use(bodyParser.json({
    limit: '5mb'
}));
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

app.use('/', indexRoute);
app.use('/position', positionRoute);

module.exports = app;
