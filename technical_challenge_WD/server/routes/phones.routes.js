// phones.routes.js
const express = require("express");
const router = express.Router();
const phonesJson = require("../data/phones.json");

router.get("/", (req, res) => {
  res.json(phonesJson);
});

router.get("/:id", (req, res) => {
    const { id } = req.params;

    const phone = phonesJson.find(phone => phone.id === parseInt(id, 10))

    if(!phone) {
        return res.status(404).json({message: "Phone not found"})
    }

    res.json(phone)
})

module.exports = router;
