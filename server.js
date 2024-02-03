var express = require('express');
var app = express();
app.use(express.json());
const port = process.env.PORT || 8080;
const mongodb = require('./db/connect');

app.use('/', require('./routes/index'));

app.listen(8080, () => {
    console.log(`server started on port ${port}`);
});

mongodb.initDb((err, mongodb) => {
    if (err) {
        console.log(err);
    } else {
        //app.listen(port);
        console.log(`Connected to DB and listening on ${port}`);
    }
});