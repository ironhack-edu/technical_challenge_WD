const router = require("express").Router()

const phonesRoutes = require("./phones.routes")
router.use('/phones', phonesRoutes)

module.exports = router