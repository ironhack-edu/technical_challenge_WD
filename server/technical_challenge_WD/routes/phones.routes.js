const router = require("express").Router();
const phonesJson = require("../data/phones.json");

router.get("/phones", (req, res, next) => {
    if(!phonesJson) {
        res.status(404).json("Phones not found!")
    }
    res.status(200).json(phonesJson)
});

router.get("/phones/:id", (req, res, next) => {
    const { phoneId } = req.params;
    const detailPhone = phonesJson.find((phone) => phone.id === Number(phoneId));
    if(!detailPhone) {
        res.status(404).json("Phone not found!");
    }
    res.status(200).json(detailPhone);
})

module.exports = router;