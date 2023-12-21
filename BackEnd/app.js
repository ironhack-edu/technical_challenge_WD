const express = require("express");
const cors = require('cors');
const logger = require('morgan');
const PhonesJSON = require('../technical_challenge_WD/data/phones.json');

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded());

app.get("/phones", (req, res)=>{
try{
    res.status(200).json(PhonesJSON)
}
catch(err){
   res.status(401).json({msg:"Could'nt get phone data"})
}})

app.get("/phones/:id", (req, res)=>{
    const id = req.params.id;
    try{
        const card = PhonesJSON.filter(phone=>parseInt(phone.id)===parseInt(id))
        res.status(200).json(card)
    }
    catch{
        res.status(401).json({msg:"Error"})
    }
})



app.listen(3000, ()=>{
    console.log("Listening..")
})