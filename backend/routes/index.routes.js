const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.json('All good in here');
});

// You put the next routes here

// middleware
const phoneRoutes = require('./phonesRoutes');
router.use('/phones', phoneRoutes);

module.exports = router;
