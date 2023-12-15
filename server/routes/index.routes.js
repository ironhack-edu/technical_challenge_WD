const router = require("express").Router()
const fs = require("fs");
const path = require("path")

router.get("/phones", (req, res) => {

  const filePath = path.join(__dirname, '..', 'data', 'phones.json');
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (data) {
      res.send(JSON.parse(data))
    } else {
      console.error(err)
      res.status(500)
    }
  })


})

router.get("/phones/:id", (req, res) => {

  const { id } = req.params

  const filePath = path.join(__dirname, '..', 'data', 'phones.json');
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      console.error(err)
      res.status(500)
    } else {
      const phones = JSON.parse(data)
      const phone = phones.find(elm => elm.id === parseInt(id))
      if (phone) {
        res.send(phone)
      } else {
        res.status(404)
      }
    }
  })

})

module.exports = router;
