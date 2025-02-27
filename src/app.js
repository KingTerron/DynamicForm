// Definisco i pacchetti
const express = require('express');

// Avvio il server
const app = express();

app.use(express.urlencoded({ extended: true }));

module.exports = app

