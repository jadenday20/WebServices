const express = require('express');
const routes = express.Router();
const lesson1Controller = require('../controllers/lesson1')

routes.use('/contacts', require('./contacts'))

module.exports = routes;