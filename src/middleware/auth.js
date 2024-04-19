import jsonWebToken from 'jsonwebtoken';
import 'dotenv/config'

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')
    console.log(token)

    if(!token) {
        res.status(401).json({
            status: false,
            message: "Unauthorized"
        })
    }
    jsonWebToken.verify(token[1], process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
          return res.status(401).json({
            status: false,
            message: "Unauthorized"
        });
        }
        req.user = decoded;
        next();
    });
}

export default verifyToken;