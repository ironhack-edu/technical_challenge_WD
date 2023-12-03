require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const corsConfig = require('./config/cors.config');

const app = express();

app.use(express.json());
app.use(corsConfig);

const router = require('./config/routes.config');
app.use('/', router);



const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});



