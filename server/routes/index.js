
module.exports = app => {

    const phonesRoutes = require("./phones.routes")
    app.use("/phones", phonesRoutes)

}



