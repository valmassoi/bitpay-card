const User = require('../models/user')

if (process.env.NODE_ENV !== 'production')
  require('dotenv').config()
const { SECRET_KEY } = process.env


exports.signup = (profile, res) => {

    const user = new User({ //else create and save record
      profile
    })

    user.save((err) => {
      if(err) {console.log(err);}
      // res.json({ test:"hi" })
    })

}

exports.profile  = (id, res, next) => {
  User.findOne({ 'profile.id':id }, (err, user) => {
    res.send({ user })
  })
}
