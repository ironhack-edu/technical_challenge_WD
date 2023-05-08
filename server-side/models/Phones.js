const mongoose = require('mongoose');
const Phone = require('./Phone');

const phonesSchema = new mongoose.Schema({
  phones: [Phone.schema]
});

const Phones = mongoose.model('Phones', phonesSchema);

module.exports = Phones;
