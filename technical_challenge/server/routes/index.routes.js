const router = require("express").Router();
const phonesData = require("../data/phones.json");
const Phone = require("../models/PhoneModel");
router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get("/phones", (req, res) => {
  res.json(phonesData);
});

router.get("/phones/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const phone = await Phone.findById({ id: id });

    if (!phone) {
      return res.status(404).json({ message: "Phone not found" });
    }

    res.json(phone);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
