const routes = require('express').Router();

const myController = require('../controllers');

routes.get('/', myController.awesomeFunction);
routes.get('/more', myController.returnAnotherPerson);

module.exports = routes;