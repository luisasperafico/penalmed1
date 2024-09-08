const express = require('express');
const dotenv = require('dotenv').config();

const router = require('../src/routes/cadastroRouter');
const relatosrouter = require('../src/routes/relatosRouter');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());


app.use('/api', router);
app.use('/api', relatosrouter);

module.exports = app;