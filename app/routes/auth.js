'use strict'

const Authentication = require('../controllers/authentication')
const passportService = require('../services/passport')
const passport = require('passport')
const url  = require('url')

const requireAuth = passport.authenticate('jwt', { session: false })//false is to use tokens over cookies

module.exports = function(app) {

  app.get('/profile', (req, res, next) => {

  })
  app.post('/profile', (req, res, next) => {

  })

}
