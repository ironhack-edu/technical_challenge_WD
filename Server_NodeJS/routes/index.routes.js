const router = require("express").Router();
const phonesDB = require("../../data/phones.json");

const resMsg = (res, message) => {
  res.status(500).json({"message":message});
};

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get("/phones", (req, res, next) => {
  if(phonesDB && phonesDB.length > 0)
    res.json(phonesDB);
  else
    resMsg(res, "Database problem");
});

router.get("/phones/:id", (req, res, next) => {
  const id = req.params.id;
  if(phonesDB && phonesDB.length > 0 && id >= 0)
  {
    for(let i = 0; i < phonesDB.length; i++)
    {
      if(phonesDB[i].id == id)
        return (res.json(phonesDB[i]));
    }
    resMsg(res, "Wrong product ID");
  }
  else
    resMsg(res, "Database problem");
});
module.exports = router;
