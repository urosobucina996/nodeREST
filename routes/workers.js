const express    = require('express');
const route      = express.Router();
const bodyParser = require("body-parser");

// DB Mongo
const mongoose   = require('../database/mongodb');
const assert      = require('assert');

route.use(bodyParser.json());
route.use(bodyParser.urlencoded({ extended: true }));

function find(res,parameter = null,restrictions = null){

    const param = parameter ? {'name' : parameter} : {};
    const restr = restrictions ? {} : {'_id' : 0};

    mongoose.find(param, restr)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            console.log(err);
        });
}

function inserOne(data){

    let insert = new mongoose(data);
    insert.save();
}


route.get('/', (req, res) => {

    //Get data from collection
    find(res);

});


// Pass parametar
route.get('/:name', (req, res) => {

    //res.send(req.params.name);
    // Dinamicly make fields for show data.
    const restrictions = ['_id','name'];
    find(res,req.params.name);

});

route.post('/', (req, res) => {

    inserOne(req.body);
    res.redirect('/');
});

module.exports = route;