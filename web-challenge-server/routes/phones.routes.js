const phones = require ("../data/phones.json");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({success: true, data: phones});
})

router.get("/:id", (req, res) => {
    const phone = phones.find((telephone) => Number(telephone.id) === Number(req.params.id));

    if (phone){
        res.json({success: true, data: phone});
    } else {
        res.json({success: false, message: "Not Found"})
    }
})


module.exports = router;