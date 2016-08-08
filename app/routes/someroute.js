'use strict'

// if (process.env.NODE_ENV !== 'production')
//   require('dotenv').config()

module.exports = app => {

  app.get('/someroute/test', (req, res, next) => {
    res.end("test GET works!")
  })
  app.post('/someroute/test', (req, res, next) => {
    res.end("test POST works!")
  })
  app.get('/someroute/:someParam', (req, res) => {
    let { someParam } = req.params
    res.writeHead(200, { "Content-Type": "application/json" })
    res.end(JSON.stringify({req:someParam}))
  })

}
