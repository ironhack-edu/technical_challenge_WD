const router = require('express').Router()

router.get("/", (req, res, next) => {
    res.send("All good in here")
})

module.exports = router