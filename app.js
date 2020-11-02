const express = require('express');
const app     = express();
const port    = 4000;


app.get('/',(req, res) =>{
    res.send(`Into the express response,`);
});

app.get('/api/users', (req, res) =>{
    res.send(JSON.stringify([1,2,4]));
});

// Old way
// const server = http.createServer((req, res) => {
//
//     res.write("Into response Node.");
//     res.end();
//
// });

app.listen(port, function (error) {

    if(error){
        console.log(error);
    }else{
        console.log(`Listening on port ${port}`);
    }

});
