const router = require("express").Router();
const Phone = require("./../models/Phone.model")


router.get("/phones", (req, res) => {

  Phone
    .find()
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
})


router.get("/phones/:id", (req, res, next) => {

  const { id } = req.params

  Phone
    .findById(id)
    .then(response => res.json(response))
    .catch(err => next(err))
})

module.exports = router;
