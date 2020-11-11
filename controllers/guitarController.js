const mongoose    = require('../database/mongodb');

const axios       = require('axios');

const scrape = async (req,res) => {

    console.log('in');
    axios.get('https://www.music-box.rs/gitare/elektricne-gitare/?manufacturer=108')
        .then( (response) => {

            // TODO get data from page and put it in collection mongo
            console.log(response.data);
            //console.log(response);
            //res.send(response);
        })
        .catch( (e) => {
            console.log(e);
        });

};

module.exports = {
    scrape
};