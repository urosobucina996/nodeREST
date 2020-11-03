const express = require('express');
const route   = express();



// PORT from enviroment or 4000
const port    = process.env.PORT || 4000;

const workersRoutes = require('./routes/workers');

route.use('/api/users', workersRoutes);


route.listen(port, function (error) {

    if(error){
        console.log(error);
    }else{
        console.log(`Listening on port ${port}`);
    }

});
