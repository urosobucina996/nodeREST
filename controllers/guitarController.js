const mongoose    = require('../database/mongodb');

const axios       = require('axios');

const cherio      = require('cherio');

const scrape = async (req,res) => {

    axios.get('https://www.music-box.rs/gitare/elektricne-gitare/?manufacturer=108')
        .then( (response) => {

            // TODO get data from page and put it in collection mongo
            //console.log(response.data.toString());
            let stringData = response.toString();

            //let price      = cherio('#product-price-1739 .price', stringData);

            //console.log(price);
            //res.send(response);
        })
        .catch( (e) => {
            console.log(e);
        });

};

module.exports = {
    scrape
};