module.exports = app => {
    const indexRoutes = require('./index.routes')
    app.use('/', indexRoutes)

    const phoneRoutes = require('./phone.routes')
    app.use('/phone', phoneRoutes)
}

