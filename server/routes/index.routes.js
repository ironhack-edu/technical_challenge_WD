const router = require("express").Router();

router.use('/phones', require('./phones.routes'))

module.exports = router;
