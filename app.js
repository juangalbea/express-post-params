// app.js
const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.get('/', (req, res, next) => {
    res.render('index');
})

app.get('/get-user-info', (req, res) => {
    res.render('user-info-form');
});

app.get('/display-user-info', (req, res) => {
    let name = req.query.name;
    let age = req.query.age;
    let superhero = req.query.superhero;

    res.send(`
      Your name is ${name}
      Your age is ${age}
      Your favorite superhero is ${superhero}
    `)
});

app.listen(3000, () => console.log('App listening on port 3000!'));