(async () => {
    const axios = require('axios');
    const Schema = require('../models/schema');

    console.log("In build stage...");

    await Schema.deleteMany();

    const response = await axios.get(`https://api.wazirx.com/api/v2/tickers`);
    const result = await response.data;
    
    let i = 0;
    for (let stock in result) {
        let stockObj = result[stock];

        const newStockObj = new Schema({
            name: stockObj.name,
            last: stockObj.last,
            buy: stockObj.buy,
            sell: stockObj.sell,
            volume: stockObj.volume,
            base_unit: stockObj.base_unit
        });
        
        try {
            const stock = await newStockObj.save();
        }
        catch (err) {
            console.log(err);
            break;
        }

        if (++i === 10) break;
    }
    console.log("Documents stored");
    
    process.exit(0);
})()