const Schema = require('./models/schema');
const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const app = express();

(async () => {
    let results = await Schema.find({});
    results = results.map(element => {
        return {
            name: element.name,
            last: element.last,
            buy: element.buy,
            sell: element.sell,
            volume: element.volume,
            base_unit: element.base_unit,
        }
    });

    app.set('view engine', 'ejs');

    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.use(express.static(__dirname + '/views'));

    app.use('/', (req, res) => {
        res.render('index', {
            results: results
        });
    });

    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT} ...`);
    });
})()
