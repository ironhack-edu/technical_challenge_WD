const express = require('express');
const phonesRouter = require('./phone.routes');

const router = express.Router();

router.use('/phones', phonesRouter);


module.exports = router;