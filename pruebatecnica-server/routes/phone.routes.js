const router = require("express").Router();
const Phone = require("../models/Phone.model");

router.get("/", (req, res, next) => {
    Phone.find()
        .then(response => res.status(200).json(response))
        .catch(err => res.status(500).json(err));
});

router.get("/:id", (req, res, next) => {
    const { id } = req.params;

    Phone.find({ id: id })
        .then(response => res.status(200).json(response))
        .catch(err => res.status(500).json(err));
});

module.exports = router;