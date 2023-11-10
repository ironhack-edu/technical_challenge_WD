const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Phone = require("../models/Phone.model");

router.get("/", (req, res, next) => {
  res.json("All good in here");
});


router.get("/phones", async(req, res, next) => {
 try{
  const phones = await Phone.find()
  res.status(200).json(phones)
} catch (error) {
  res
    .status(500)
    .json({ error: "Status code: 500 (Internal Server Error)" });
}
})
   
router.get("/phones/:id", async (request, response) => {
  const { id } = request.params;
  if (mongoose.isValidObjectId(id)) {
    try {
      const currentPhone = await Phone.findById(id);
      if (currentPhone) {
        response.json(currentPhone);
      } else {
        response
          .status(404)
          .json({ message: "Phone not found" });
      }
    } catch (error) {
      console.log(error);
      response.status(400).json({ error });
    }
  } else {
    response.status(400).json({ message: "The id seems wrong" });
  }
});

module.exports = router;
