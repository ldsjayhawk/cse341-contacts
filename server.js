const express = require('express');
const mongo = require('./database/database');
const app = express();

const port = process.env.PORT || 3000; // declare port

app.use('/', require('./routes'));

mongo.initDb((err) => {
    if(err) {
        console.log(err);
    } 
    else {
        app.listen(port, () => {console.log(`Database is listening and node running on port: ${port}`)})
    }
})



