const jwt = require('jsonwebtoken')
// let's use environment variables to help jwt methods have a token
const JWT_SECRET = process.env.JWT_SECRET // some kind of password to access token
const JWT_EXPIRES = process.env.JWT_EXPIRES // the length of time of the token 

// let's have the functions to create a token
function signJwt(payload) {
  // "sign" method is used by adding information that wants to be included, secret code for password, and the duration of the token
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES })
  return token
}

// how to break down token information
function parseJwt(token) {
  // jwt "verify" method can make errors or "throw an error")
  // should apply try-catch to handle or "catch the error"
  // to prevent crashes and give the right response
  try {
    // verify token & take information inside token for a variable
    const result = jwt.verify(token, JWT_SECRET)
    return result
  } catch (err) {
    // catch error, the parameter will provide information what caused the error
    // log/check the error
    console.log(err);
    // return null, we can use this function and add a condition if the token was wrong or expired
    return null
  }
}



// exports two function inside this file using "Object Property Value Shorthand", 
// then any file that requires this file will recieves an object with two methods
module.exports = {
  signJwt,
  parseJwt
}