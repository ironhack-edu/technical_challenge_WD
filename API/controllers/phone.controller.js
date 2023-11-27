const Phone = require ("../models/phone.model");

module.exports.list = (req, res, next) => {
    Phone.find()
      .then((phones) => res.status(200).json(phones))
      .catch((error) => next(error));
  };

module.exports.findById = (req, res, next) => {
  const phoneId = req.params.id;

  Phone.findById(phoneId)
    .then((phone) => {
      if (!phone) {
        return res.status(404).json({ error: 'Phone not found' });
      }

      res.status(200).json(phone);
    })
    .catch((error) => next(error));
};