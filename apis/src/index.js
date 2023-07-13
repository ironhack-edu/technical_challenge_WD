const express = require('express');
const app = express();

const phones = require('../../data/phones.json');

const port = 3000;
const baseUrl = 'http://localhost:' + port;


app.get('/', (_, res) => res.redirect(301, baseUrl + '/phones'));

app.get('/phones', (_, res) =>  res.json(phones));

app.get('/phones/:id', (req, res) => res.json(phones.find(p => p.id == req.params.id)));

app.listen(port, () => {
    console.log('Listening on ' + baseUrl)
});