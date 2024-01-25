var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static("public"));

app.use( cors() );

app.use('/', indexRouter);
app.use('/users', usersRouter);

const phones = require('./data/phones.json');

app.get('/phones', function(req, res, next) {
    return res.status(200).json(phones);
});

app.get('/phones/:phoneId', function(req, res, next){
    const { phoneId } = req.params;

    return res.status(200).json(phones.find((phone) => phone.id === Number(phoneId)));
});


module.exports = app;
