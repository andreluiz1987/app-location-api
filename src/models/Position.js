'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({

    latitude: {
        type: Number
    },
    longitude: {
        type: Number
    },
    date: {
        type: Date
    }
});

module.exports = mongoose.model("Position", schema);