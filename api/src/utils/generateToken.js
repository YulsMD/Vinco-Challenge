const jwt = require('jsonwebtoken');

/**
 * It takes a user object and returns a token that expires in 7 days.
 * @param user - The user object that you want to encode into the token.
 */
const generateToken = (user) => {
    return jwt.sign({user}, process.env.SECURE_TOKEN, {expiresIn: '7d'})
}

module.exports = generateToken;