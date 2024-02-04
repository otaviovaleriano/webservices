var express = require('express');
const bodyParser = require('body-parser');
var app = express();
app.use(express.json());
const port = process.env.PORT || 8080;
const mongodb = require('./db/connect');
// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('swagger.json');


app
//   .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
  .use(bodyParser.json())  
  .use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Z-Key');
    // res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
     
    next();
  })
  .use('/api', (req, res, next) => {
     res.setHeader('Content-Type', 'application/json');   
    next();
  
  })
  .use('/', require('./routes/'));


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