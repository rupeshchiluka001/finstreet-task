const mongoose = require('mongoose');
require('dotenv').config();

module.exports = mongoose.createConnection(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});