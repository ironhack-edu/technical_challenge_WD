const {
    getPhones,
    getPhoneID
} = require("../controllers/phone.controllers")

const router = require("express").Router()

router.get("/", getPhones)

router.get("/:id", getPhoneID)

module.exports = router