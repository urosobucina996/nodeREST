const express = require('express');
const route   = express();

require('dotenv').config();

// PORT from enviroment or 4000
const port    = process.env.PORT || 4000;


// Response that server is running
route.listen(port, function (error) {

    if(error){
        console.log(error);
    }else{
        console.log(`Listening on port ${port}`);
    }

});

const workersRoutes = require('./routes/workers');

route.use('/api/users', workersRoutes);


// If there is not defined route triggered this is response.
route.use((req, res) => {
    res.status(404).json({message:"Server not respond."})
});
