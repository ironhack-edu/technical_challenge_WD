const express = require("express");
const router = express.Router();
const phonesData = require("../data/phones.json");

router.get("/", async (req,res) => {
    try {
        res.json(phonesData);

    } catch (error) {
        console.log("getting phones failed", error)

    }
});

router.get("/:id", (req, res) => {
    const phoneId = parseInt(req.params.id);
    const phone = phonesData.find(phone => phone.id === phoneId);

    if (phone) {
        res.json(phone);
    } else {
        res.status(404).json({ message: "Phone not found" });
    }
});

module.exports = router;