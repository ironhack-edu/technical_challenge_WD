const express = require("express");
const router = express.Router();
const data =require ("./data/phones.json")

router.get("/phones", (req, res, next) => {
    res.json(data);
  });

router.get("/phones/:id", (req, res, next) => {
    data.forEach((elem)=>{if (req.params.id==elem.id){
        res.json(elem)
    } })
  });
 
 
module.exports = router;