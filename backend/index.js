const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const phoneData = require("../data/phones.json")
const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded());

app.get("/phones", (req, res)=>{
    try{
        res.status(200).json(phoneData)
    }
    catch(err){
        res.status(401).json({msg: "Could get get phone data"})

    }
})
app.get("/phones/:id", (req, res)=>{
    const id = req.params.id
    try{
        const entry = phoneData.filter(phone=> parseInt(phone.id)===parseInt(id))
        res.status(200).json(entry[0])
    }
    catch(err){
        res.status(401).json({msg: "Could get get phone data"})

    }
})


app.listen(3400, ()=>{
    console.log("Listening...");
})