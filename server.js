var express = require('express');
var app = express();
const port = process.env.PORT || 3000;
const mongodb = require('./db/connect');

app.use('/', require('./routes/index'));

app.listen(3000, () => {
    console.log(`server started on port ${port}`);
});


mongodb.initDb((err, mongodb) => {
    if (err) {
        console.log(err);
    } else {
        //app.listen(port);
        console.log(`mongodb connected on ${port}`);
    }
});