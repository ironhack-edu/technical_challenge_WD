const cors = require('cors')

const allowedOrigins = (process.env.ALLOWED_ORIGINS || '')
  .split(',')
  .map(origin => origin.trim())

module.exports = cors({
  origin: function(origin, next){

    if(!origin || allowedOrigins.includes(origin)){
      next(null, true)
    } else {
      
      next(new Error('Not allowed by CORS'))
    }
  },
  credentials: true
});