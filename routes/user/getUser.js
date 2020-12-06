const express = require('express')
// 👇 import exported variable at usersDb.js
const users = require('../../databases/usersDb')
const app = express()

// 👇 handle GET request method at /user
app.get('/user', (req, res) => {
  // 👇 send the users array variable
  res.send(users)
})

module.exports = app