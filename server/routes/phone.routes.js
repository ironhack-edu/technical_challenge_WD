const router = require("express").Router();
const phonesArr = require("../data/phones.json");


// GET /api/phones - Retrieves all the phones
router.get("/phones", (req, res, next) => {
    res.json(phonesArr)
})

// GET /api/phones/:phoneId - Retrieves details of a specific phone by id
router.get("/phones/:phoneId", (req, res, next) => {
    const {phoneId} = req.params;
    
    const phoneDetails = phonesArr.filter((phone) => Number(phoneId) === phone.id)
    
    res.json(phoneDetails)
})

module.exports = router;