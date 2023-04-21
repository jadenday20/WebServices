const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1')

routes.get('/', lesson1Controller.elishaRoute);
routes.get('/dallin', lesson1Controller.dallinRoute);
routes.get('/kyler', lesson1Controller.kylerRoute);

module.exports = routes;