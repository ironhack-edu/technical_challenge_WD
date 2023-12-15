const Phones = require("../../models/Phones.model")

const getPhones = (req, res, next) => {

    Phones
        .find()
        .then(response => res.json(response))
        .catch(error => next(error))
}

const getPhoneID = (req, res, next) => {

    const { id } = req.params

    Phones
        .findById(id)
        .then(response => res.json(response))
        .catch(error => next(error))
}

module.exports = {
    getPhones,
    getPhoneID
}