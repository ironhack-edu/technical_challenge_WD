var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

var cors = require('cors');
// var mongoose = require('mongoose'); //think i dont need it

const PORT = 4000;

const phonesData = require('./data/phones.json');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/phones');

var app = express();

// app.use(logger('dev'));
app.use(express.json());
app.use(cors());   // CORS middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// GET ALL PHONES
app.get('/phones', (req, res, next) =>{
    res.json(phonesData)
})

// GET PHONE DETAILS
app.get('/phones/:phoneId', (req, res, next) => {

    const { phoneId } = req.params;
    const phone = phonesData.find((phone) => phone.id === Number(phoneId));

    if(phone) {
        return res.status(200).json(phone);
    } else {
        return res.status(404).json({message: "Phone not found"});
    }
});

module.exports = app;
