import jsonWebToken from 'jsonwebtoken';
import 'dotenv/config'

const generateAccessToken = (user) => {
    return jsonWebToken.sign(user, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES || '1800s'
    })
}

export {
    generateAccessToken
}