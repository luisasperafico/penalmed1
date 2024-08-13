const express = require('express');
const app = express()
const cors = require('cors');

app.set('port', 3003);
app.use(cors())
app.use(express.json())

const cadastroRouter = require('./routes/cadastroRouter');

app.use('/api', cadastroRouter);


module.exports = app;