const mongoose = require('mongoose');
const url = "mongodb://127.0.0.1:27017/personData";

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(url);

const schemaWorkers = mongoose.Schema;

const workersDataSchema =  mongoose.Schema({
    name     : String,
    lastname : String,
    age      : Number
}, {collection:'workers'});

const WorkersData = mongoose.model('WorkersData',workersDataSchema);


module.exports = WorkersData;