const express    = require('express');
const route      = express.Router();
const bodyParser = require("body-parser");

const guitarController = require("../controllers/guitarController");

route.use(bodyParser.json());
route.use(bodyParser.urlencoded({ extended: true }));

//route.get('/', guitarController.scrape);
route.get('/', guitarController.scrape);

module.exports = route;