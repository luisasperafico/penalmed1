const express = require('express');
const dotenv = require('dotenv').config();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const restauranteRouter = require('../src/routes/RestauranteRouter');
const cadastroRouter = require('../src/routes/cadastroRouter')
const relatosRouter = require('../src/routes/relatosRouter')

const cors = require('cors');
const app = express();

app.set('port', process.env.PORT || 3003);
app.use(express.json());
app.use(cors());


app.use('/api', restauranteRouter);
app.use('/api', cadastroRouter);
app.use('/api', relatosRouter);

module.exports = app;