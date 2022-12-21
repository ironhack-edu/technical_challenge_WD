module.exports = app => {
	const phonesRoutes = require("./phones.routes")
	app.use("/api/phones", phonesRoutes)
}
