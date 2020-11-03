const express    = require('express');
const route      = express.Router();
const bodyParser = require("body-parser");

// DB Mongo
const mongoose   = require('../database/mongodb');
const assert      = require('assert');

route.use(bodyParser.json());
route.use(bodyParser.urlencoded({ extended: true }));


route.get('/', (req, res) => {

    //Get data from collection
    mongoose.find()
        .then((data) =>{
            res.send(data);
        })
        .catch((err) => {
            console.log(err);
        });

});


// Pass parametar
route.get('/:id', (req, res) => {

    res.send(req.params.id);

});

route.post('/', (req, res) => {

    res.send(req.body);

});

module.exports = route;