const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1')

routes.get('/', lesson1Controller.jadenRoute);
routes.get('/elisha', lesson1Controller.elishaRoute);

module.exports = routes;