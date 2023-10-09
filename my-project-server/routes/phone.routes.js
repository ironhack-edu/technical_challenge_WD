const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

const jsonFilePath = path.join(__dirname, "../db/phones.json");
const rawData = fs.readFileSync(jsonFilePath, "utf8");
const phones = JSON.parse(rawData);

router.get("/phones", (req, res, next) => {
    try {
        res.json(phones);
    } catch (err) {
        console.log("Error reading JSON file...", err);
        res.status(500).json({
            message: "Error reading JSON file",
            error: err,
        });
    }
});
router.get("/phones/:phoneId", (req, res, next) => {
    try {
        const phoneId = req.params.phoneId;
        const phone = phones.find((phone) => phone.id == phoneId);
        if (!phone) {
            res.status(404).json({ message: "Phone not found" });
        } else {
            res.json(phone);
        }
    } catch (err) {
        console.log("Error reading JSON file...", err);
        res.status(500).json({
            message: "Error reading JSON file",
            error: err,
        });
    }
});

module.exports = router;
