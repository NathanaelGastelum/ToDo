const express = require('express');
const path = require('path');
const routes = require('./routes/index');

const app = express();

app.use(express.static('public'))

app.use('/', routes);

module.exports = app;