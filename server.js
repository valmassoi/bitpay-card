'use strict'

const express = require('express')
const http = require('http')
const path = require('path')
const router = require('./app/router')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const favicon = require('serve-favicon')

const app = express()

const dbUrl = process.env.MONGODB_URI || 'mongodb://localhost:27018/data'
mongoose.connect(dbUrl)

app.use(express.static(path.join(__dirname))) //TODO double security on check this
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.enable('trust proxy')
app.use(favicon(path.join(__dirname, 'src/_assets/images', 'favicon.ico')))
router(app)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'))
})

// app.get('*', (req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' })
//   res.end('404!')
// })

const port = process.env.PORT || 8081

const server = http.Server(app)
server.listen(port, () => {
  console.log('Server Running on port: ' + port + "\n" + "http://localhost:" + port)
})
