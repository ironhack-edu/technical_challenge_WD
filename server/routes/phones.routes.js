const router = require("express").Router()

const Phone = require('./../models/Phones.model')

router.get('/getAllPhones', (req, res) => {
    
    Phone
        .find()
        .then(phone => res.json(phone))
        .catch(err => res.status(500).json(err))
})

router.get('/getOnePhone/:phone_id', (req, res) =>{

    const { phone_id } = req.params

    Phone
        .findById(phone_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

module.exports = router
