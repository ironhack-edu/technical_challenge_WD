const router = require("express").Router();
const data = require('./../data/phones.json')




router.get("/phones", (req, res, next) => {
  res.json(data);
});

router.get("/:phone_id", (req, res, next) => {
  const { phone_id } = req.params
  console.log(phone_id)
  const phone = data.find(phone => phone.id === phone_id)
  if (phone) {
    res.json(phone);
  } else {
    res.status(404).json({ message: 'Teléfono no encontrado' });
  }
});

module.exports = router;

