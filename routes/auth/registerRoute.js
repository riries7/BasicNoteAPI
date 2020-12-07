const express = require('express')
const users = require('../../databases/usersDb')
  

// called "object destructuring"
const { signJwt } = require('../../helpers/jwtHelper')

const app = express.Router()

app.post('/auth/register', (req, res) => {
  const body = req.body
  users.push(body)
  // use signJwt function to create a token by using inserted body as information inserted in the token
  const token = signJwt(body)
  // add token property in user with value of token so it resulted as a body respond
  body.token = token
  res.send(body)
})

module.exports = app