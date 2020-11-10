const express    = require('express');
const route      = express.Router();
const bodyParser = require("body-parser");

const workersController = require("../controllers/workesController");

route.use(bodyParser.json());
route.use(bodyParser.urlencoded({ extended: true }));


// -------- Routes --------- //
route.get('/', workersController.get);


// Pass parametar
route.get('/:name', workersController.getByName);

route.post('/', workersController.insertData);

route.patch('/', workersController.updateData);

route.delete("/:id", workersController.deleteData);


// -------- End of Routes ------- //

// -------- Exports -------- //

module.exports = route;

// -------- End of Exports ------- //