const express = require('express');
const app = express();
const port = process.env.port || 3000;
const mongoose = require('mongoose');

const requireDir = require('require-dir');
const cors = require('cors');

app.use(express.json());
app.use(cors());

// registrando o módulo product na nossa aplicação

requireDir('./src/models');
const Product = mongoose.model('Product');

// rotas
app.use('/api', require('./src/routes'));

app.listen(port, ()=> {
  console.log(`http://localhost:${port}`);
}); 