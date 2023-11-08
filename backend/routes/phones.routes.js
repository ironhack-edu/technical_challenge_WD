const router = require('express').Router();
const data = require('../data/phones.json');

router.get('/phones', (req, res, next) => {
  if (!data) {
    res.status(404).json('Not found!');
  }
  res.status(200).json(data);
});

router.get('/phones/:phoneId', (req, res, next) => {
  const { phoneId } = req.params;
  const findPhone = data.find((phones) => phones.id === phoneId);

  if (findPhone) {
    res.status(200).json(findPhone);
  }
  res.status(404).json({ message: 'Not found!' });
});

module.exports = router;
