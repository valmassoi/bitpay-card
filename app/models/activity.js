const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')

// Define model
const activitySchema = new Schema({
  //TODO
})

// Create the model class
const ModelClass = mongoose.model('activity', activitySchema)

// Export the model
module.exports = ModelClass
