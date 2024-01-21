const routes = require('express').Router();

// const myController = require('../controllers');
// routes.get('/more', myController.returnAnotherPerson);

routes.use('/contacts', require('./contacts'));



module.exports = routes;