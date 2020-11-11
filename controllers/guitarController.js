const mongoose    = require('../database/mongodb');

const axios       = require('axios');

const cherio      = require('cherio');

const headers = {
    'Accept': '*/*',
    'Connection': 'keep-alive',
    'Accept-Language': 'en-US,en;q=0.9,sr;q=0.8',
    'Cache-Control': 'no-cache',
    'Sec-Fetch-Dest': 'document',
    'Pragma': 'no-cache',
    'Sec-Fetch-Dest': 'script',
    'Sec-Fetch-Mode': 'no-cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36'
};

const scrape = async (req,res) => {

    axios.get('https://www.music-box.rs/gitare/elektricne-gitare/?manufacturer=108',{
        headers
    })
        .then( (response) => {

            // TODO get data from page and put it in collection mongo
            //console.log(response.data.toString());
            let stringData = response.toString();

            //let price      = cherio('#product-price-1739 .price', stringData);

            //console.log('end of scrape');
            //res.send(response);
        })
        .catch( (e) => {
            console.log(e);
        });

};

module.exports = {
    scrape
};