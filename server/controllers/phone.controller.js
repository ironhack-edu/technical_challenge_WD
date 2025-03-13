const fs = require('fs');
const path = require('path');

const data = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../../data/phones.json"), "utf-8")
);

module.exports.showAll = (req, res) => {
  const allPhones = data;
  try {
    res.json(allPhones); 
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" }); 
  }
};

module.exports.showDetails = (req, res) => {
    const phoneId = req.params.id;
    const phoneDetails = data.find((phone) => phone.id === Number(phoneId) )
    try{
       if(phoneDetails) {
        res.json(phoneDetails) 
    } else {
        res.json({message:"Phone not found"})
    }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Something went wrong in id" });
    }
}