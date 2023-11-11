const router = require("express").Router();
const phonesJSON = require("../data/phones.json");

// GET '/phones' to send all phones data in the json
router.get("/", (req, res) => {
  if (phonesJSON) {
    res.status(200).json(phonesJSON);
  } else {
    res.status(404).json("Not found");
  }
});

// GET '/phones:id' to send phone details data
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const phone = phonesJSON.find((phone) => phone.id === Number(id));

  if (phone) {
    res.status(200).json(phone);
  } else {
    res.status(404).json("Not found");
  }
});

module.exports = router;
