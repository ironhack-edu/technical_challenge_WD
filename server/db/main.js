const Phones = require('../data/phones.json')
const mongoose = require('mongoose');

module.exports.list = (req, res, next) => {

    res.json(Phones)
}

module.exports.detail = (req, res, next) => {

    const id = req.params.id
    const phone = Phones.find(phone => phone.id == id)
    if (phone) {
        res.json(phone)
    } else {
        res.status(404).json({ message: 'Phone not found' })
    }

}