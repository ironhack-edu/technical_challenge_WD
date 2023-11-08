const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.json('All good in here');
});

// You put the next routes here 👇

const phoneRoutes = require('./phones.routes');
router.use('/phones', phoneRoutes);

module.export = router;
