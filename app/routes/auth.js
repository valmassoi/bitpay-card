'use strict'

const Authentication = require('../controllers/authentication')
const passportService = require('../services/passport')
const passport = require('passport')
const url  = require('url')

const requireAuth = passport.authenticate('jwt', { session: false })//false is to use tokens over cookies

module.exports = function(app) {

  // app.get('/profile', (req, res, next) => {
  //
  // })
  app.post('/auth/login', (req, res, next) => {
    let { email, password } = req.body
    let profile = req.headers.authorization
    console.log("auth req by:", email, password);
    let success = false;
    if (email === "a@a.aa" && password === "a")//HACK
      success = true;
    res.send({ success })//HACK
  })

}
