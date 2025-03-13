const {Router} = require("express");
const router = Router();

const phoneController = require('../controllers/phone.controller')

router.get("/phones", phoneController.showAll);
router.get("/phones/:id", phoneController.showDetails);

module.exports = router;