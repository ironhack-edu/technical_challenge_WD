const express = require("express");
const router = express.Router();
const phonesData = require("../data/phones.json")

router.get("/phones", (req, res, next) => {
    res.json(phonesData);
  });


router.get('/phones/:id', (req, res, next) => {
    const phoneId = parseInt(req.params.id)
    const phone = phonesData.find(phone => phone.id === phoneId);
    if (phone) {
      res.json(phone);
    } else {
      res.status(404).json({ message: 'Phone not found' });
    }
  });



module.exports = router;
