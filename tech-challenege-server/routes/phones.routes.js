const router = require("express").Router();
const phones = require("../data/phones.json");

router.get("/phones", (req, res, next) => {
  res.send(phones);
});
router.get("/phones/:id", (req, res, next) => {
  const id = parseInt(req.params.id);
  const phone = phones.find((phone) => phone.id === id);
  if (phone) {
    res.json(phone);
  } else {
    res.status(404).json({ message: "phone not found" });
  }
});

module.exports = router;
