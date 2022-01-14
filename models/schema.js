const mongoose = require('mongoose');
const connection = require('../config/connection');

const schema = new mongoose.Schema({
    name: String,
    last: Number,
    buy: Number,
    sell: Number,
    volume: Number,
    base_unit: String
})

module.exports = connection.model("Stock", schema);