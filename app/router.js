const auth = require('./routes/auth')
const someroute = require('./routes/someroute')

const router = require('express').Router()

module.exports = function(app) {
  main: router,
  auth(app),
  someroute(app)
}
