module.exports = app => {

    const indexRoutes = require("./index.routes");
    app.use("/api", indexRoutes);

    const phonesRoutes = require("./phones.routes")
    app.use("/api/phones", phonesRoutes)

}