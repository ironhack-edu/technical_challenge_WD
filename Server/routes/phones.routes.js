const router = require('express').Router()
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Phone = require("../models/Phone.model")

/* GET  all phones page */

router.get("/", (req, res) => {
  
  Phone.find()
    .then((phonesFromAPI) => {
      console.log(phonesFromAPI);
      res.json(phonesFromAPI);
    })
    .catch((error) => {
console.log({error})
    });
});

/* GET  a specific phone page (detail)*/

router.get('/:phoneId', async (req, res) => {
  const { phoneId } = req.params
  console.log (phoneId)
    try {
      const currentPhone = await Phone.findById(phoneId)
      if (currentPhone) {
        console.log(currentPhone)
        res.json({ phone: currentPhone })
      } else {
        res.status(404).json({ message: 'Phone not found' })
      }
    } catch (error) {
      console.log(error)
      res.status(400).json({ error })
    }
  } 
)

module.exports = router
