module.exports = app => {

    const indexRouter = require('./index.routes')
    app.use('/', indexRouter)

    const phonesRouter = require('./phones.routes')
    app.use('/api/phones', phonesRouter)

}
