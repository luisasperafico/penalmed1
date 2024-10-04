const express = require('express');
const dotenv = require('dotenv').config();

const restauranteRouter = require('../src/routes/RestauranteRouter');
const cors = require('cors');
const app = express();

app.set('port', process.env.PORT || 3003);
app.use(express.json());
app.use(cors());


app.use('/api', restauranteRouter);

module.exports = app;