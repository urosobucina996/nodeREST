// DB Mongo
const mongoose    = require('../database/mongodb');

const bodyParser = require("body-parser");
const request    = require('request');

const assert      = require('assert');

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

const get = (async (req,res) => {
    await find(res);
});


const getByName = ( async (req, res) => {

        //res.send(req.params.name);
        // Dinamicly make fields for show data.
        const restrictions = ['_id','name'];
        await find(res,req.params.name);
});

const insertData = ( async (req, res) => {
    await inserOne(req.body,res);
});

const updateData = ( async (req, res) => {
    await updateRow(req.body,res);
});

const deleteData = ( async (req, res) => {
    await deleteRow(res,req.params.id)
});


module.exports = {
    get,
    getByName,
    insertData,
    updateData,
    deleteData
};