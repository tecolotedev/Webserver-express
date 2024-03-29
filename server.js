const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
//Express HBS Engine
hbs.registerPartials(__dirname + '/views/parciales');

app.set('view engine', 'hbs');
//Helpers

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'a todos',
        anio: new Date().getFullYear()
    });

});

app.get('/about', (req, res) => {
    res.render('about', {
        anio: new Date().getFullYear()
    });
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})