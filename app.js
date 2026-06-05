const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = 3000;

const databaseUrl = process.env.MONGO_URI || 'mongodb://localhost:27017/aroundb';

mongoose.connect(databaseUrl);

app.use(express.json());

app.use((req, res, next) => {
  req.user = {
    _id: '6a225a38b6b13db86e2afc35'
  };
  next();
});

const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');

app.use('/users', usersRouter);
app.use('/cards', cardsRouter);

app.use((req, res) => {
  res.status(404).send({ message: 'Recurso solicitado no encontrado' });
});

app.listen(PORT);