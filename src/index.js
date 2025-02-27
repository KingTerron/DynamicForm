const express = require('express');
const app = require('./app');
const path = require('path');
const hbs = require('hbs');
const formRouter = require('./routers/formRouter')
const fileReader = require('./routers/fileReader')
const port = 3000;

console.log(__dirname);
console.log(path.join(__dirname,'../public'));


// definisco i percorsi per le cartelle
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialPath = path.join(__dirname, ('../templates/partials'))

app.use(express.json());
app.use(formRouter, fileReader);

// setta le handlebars e la cartella templates
app.set('view engine', 'hbs'); // di default cerca la cartella views
app.set('views', viewsPath); // setta la cartella templates come root
hbs.registerPartials(partialPath);



app.use(express.static(publicDirectoryPath)); // usa la cartella public come root




app.listen(port, () => {
    console.log('Server is running on port', port);
});