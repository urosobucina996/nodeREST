const express = require('express');
const app     = express();

// PORT from enviroment or 4000
const port    = process.env.PORT || 4000;


app.get('/',(req, res) =>{
    res.send(`Into the express response,`);
});

app.get('/api/users', (req, res) =>{
    res.send(JSON.stringify([1,2,4]));
});


// Pass parametar
app.get('/api/users/:id', (req, res) => {

    res.send(req.params.id);

});

app.listen(port, function (error) {

    if(error){
        console.log(error);
    }else{
        console.log(`Listening on port ${port}`);
    }

});
