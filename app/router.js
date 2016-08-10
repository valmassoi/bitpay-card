const auth = require('./routes/auth')
const userActivity = require('./routes/userActivity')

const router = require('express').Router()

module.exports = function(app) {
  main: router,
  auth(app),
  userActivity(app)
}
