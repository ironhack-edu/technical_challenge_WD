require('dotenv').config();
require('./data/phones.json');
const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the 'images' directory
app.use('/images', express.static(path.join(__dirname, 'images')));

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require('./config')(app);

// 👇 Start handling routes here
const indexRoutes = require('./routes/index.routes');
app.use('/api', indexRoutes);

const phoneRouter = require('./routes/phones.routes'); // <== IMPORT
app.use('/api', phoneRouter);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require('./error')(app);

module.exports = app;
