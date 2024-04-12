// var express = require('express');
// var router = express.Router();
// var mongoose = require('mongoose');

// const phonesJson = require('../data/phones.json')

// // Get all phones
// router.get('/', (req, res, next) => {

//   phonesJson.find()
//       .then((foundPhone) => {
//           console.log("Found Projects ===>", foundPhone)
//           res.json(foundPhone)
//       })
//       .catch((err) => {
//           console.log(err)
//           res.json(err)
//       })
// });

// // Get Project details
// router.get('/details/:phoneId', (req, res, next) => {

//   const { phoneId } = req.params;

//   // Verifying if it has a valid Id. Its not really necessary 
//   if (!mongoose.Types.ObjectId.isValid(projectId)) {
//       res.status(400).json({ message: 'Specified id is not valid' });
//       return;
//   }

//   phonesJson.findById(phoneId)
//       .then((foundPhone) => {
//           console.log("Found Project ===>", foundPhone)
//           res.json(foundPhone)
//       })
//       .catch((err) => {
//           console.log(err)
//           res.json(err)
//       });
// });

// module.exports = router;
