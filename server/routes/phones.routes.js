const router = require("express").Router();

const Phone = require('./../models/phones.model')

router.get("/getAllPhones", (req, res) => {
  console.log('WTF')

  Phone
    .find()
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))

})


router.get("/getOnePhone/:phone_id", (req, res) => {
  const { phone_id } = req.params

  Phone
    .findById(phone_id)
    .then(response => () => res.json(response))
    .catch(err => res.status(500).json(err))

})




module.exports = router;
