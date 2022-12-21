const router = require("express").Router()

const Phone = require("./../models/Phone.model")

router.get("/", (req, res, next) => {
	Phone.find()
		.then(response => {
			res.json(response)
		})
		.catch(err => res.status(500).json(err))
})

router.get("/:id", (req, res, next) => {
	const { id: phone_id } = req.params

	Phone.findById(phone_id)
		.then(response => {
			res.json(response)
		})
		.catch(err => res.status(500).json(err))
})

module.exports = router
