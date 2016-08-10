'use strict'

const Authentication = require('../controllers/authentication')
const passportService = require('../services/passport')
const passport = require('passport')
const url  = require('url')
const activity = require('../models/TEMPactivity')

const requireAuth = passport.authenticate('jwt', { session: false })//TODO

module.exports = app => {

  app.get('/activity', (req, res, next) => {
    let token = req.headers.authorization
    console.log("get activity for:", token);
    res.writeHead(200, { "Content-Type": "application/json" })
    res.end(JSON.stringify(activity))
  })

  //TEMP routes
  app.post('/someroute/test', (req, res, next) => {
    res.end("test POST works!")
  })
  app.get('/someroute/:someParam', (req, res) => {
    let { someParam } = req.params
    res.writeHead(200, { "Content-Type": "application/json" })
    res.end(JSON.stringify({req:someParam}))
  })

}
