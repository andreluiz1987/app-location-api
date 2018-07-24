'use strict'

const mongoose = require('mongoose');
const Position = mongoose.model("Position");

exports.getPositions = async () => {
    const res = await Position.find().sort({_id:-1}).limit(5);
    return res;
}

exports.create = async (position) => {
    var obj = new Position();
    
    obj.latitude = position.latitude;
    obj.longitude = position.longitude;
    obj.date = position.date;
    console.log(position.latitude);
    await obj.save();
}