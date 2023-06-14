const Phone = require('./../models/Phone.models')


const getAllPhones = (req, res, next) => {

    Phone
        .find()
        .then(response => res.json(response))
        .catch(err => next(err))

}

const getOneDetails = (req, res, next) => {

    const { id } = req.params

    Phone
        .findById(id)
        .then(response => res.json(response))
        .catch(err => next(err))

}


module.exports = {
    getAllPhones,
    getOneDetails
}