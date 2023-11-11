const router = require("express").Router();
const data = require("../data/phones.json");

router.get("/", (req, res, next) => {
  if (data) {
    res.status(200).json(data);
  } else {
    res.status(404).json("Data not found");
  }
});

router.get("/:phoneId", (req, res, next) => {
  const { phoneId } = req.params;
  const foundPhone = data.filter((data) => data.id.toString() === phoneId);

  if (foundPhone) {
    res.status(200).json(foundPhone);
  } else {
    res.status(404).json("Could not find phone with that id");
  }
});

module.exports = router;
