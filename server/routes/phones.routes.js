const router = require("express").Router()


const { getAllPhones, getOneDetails } = require('../controllers/phone.controllers.js')


router.get('/', getAllPhones)
router.get('/:id', getOneDetails)


module.exports = router