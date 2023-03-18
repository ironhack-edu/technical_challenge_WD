// services/phonesService.js
const fs = require("fs");

let phonesData;
fs.readFile("./data/phones.json", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  phonesData = JSON.parse(data);
});

const getAllPhones = () => {
  return phonesData;
};

const getPhoneById = (id) => {
  return phonesData.find((phone) => phone.id === id);
};

module.exports = {
  getAllPhones,
  getPhoneById,
};
