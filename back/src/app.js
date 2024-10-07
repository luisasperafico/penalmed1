const express = require('express');
const dotenv = require('dotenv').config();

const restauranteRouter = require('../src/routes/RestauranteRouter');
const cadastroRouter = require('../src/routes/cadastroRouter')


const cors = require('cors');
const app = express();

app.set('port', process.env.PORT || 3003);
app.use(express.json());
app.use(cors());


app.use('/api', restauranteRouter);
app.use('/api', cadastroRouter);

module.exports = app;