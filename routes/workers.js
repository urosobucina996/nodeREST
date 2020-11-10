const express    = require('express');
const route      = express.Router();
const bodyParser = require("body-parser");

// DB Mongo
const mongoose    = require('../database/mongodb');
const assert      = require('assert');

route.use(bodyParser.json());
route.use(bodyParser.urlencoded({ extended: true }));


// --------  Functions for CRUD ----------- //

 function find(res,parameter = null,restrictions = null){

    const param = parameter ? {'name' : parameter} : {};
    const restr = restrictions ? {} : { '__v':0};

    mongoose.find(param, restr)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            console.log(err);
        });
}

function inserOne(data,res){

    let insert = new mongoose({
        name     : data.name,
        lastname : data.lastname,
        age      : data.age
    });
    // Promise after exec
    insert.save()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err =>{
            res.status(400).json(err);
        });
}

function updateRow(data, res){

    mongoose.update({'name':data.name,'lastname':data.lastname},{'age':data.age})
        .then(() => {
            res.send(`Data updated!`);
        })
        .catch( (err) => {
            console.log(err);
        });
}

function deleteRow(res,data){

    mongoose.deleteOne({_id : data})
        .then( ()=>{
            res.status(200).json({message: "Deleted data."});
        })
        .catch( (err) => {
            res.status(400).json({ message: err});
        });
}

// -------- End Functions for CRUD ----------- //


// -------- Routes --------- //
route.get('/', async (req, res) => {

    //Get data from collection
    await find(res);

});


// Pass parametar
route.get('/:name', async (req, res) => {

    //res.send(req.params.name);
    // Dinamicly make fields for show data.
    const restrictions = ['_id','name'];
    await find(res,req.params.name);

});

route.post('/', async (req, res) => {

    await inserOne(req.body,res);
    //res.redirect('/api/');
});

route.patch('/', async (req, res) => {


    await updateRow(req.body,res);

});

route.delete("/:id", async (req,res) => {

    await deleteRow(res,req.params.id)
});


// -------- End of Routes ------- //

// -------- Exports -------- //

module.exports = route;

// -------- End of Exports ------- //