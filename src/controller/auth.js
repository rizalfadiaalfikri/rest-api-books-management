import sequelize from "../model/index.js";
import { compare } from "../util/bcrypt.js";
import { generateAccessToken } from "../util/jwt.js";

const User = sequelize.models.User;

const register = async (req, res, next) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json({
            status: true,
            message: "User created successfully",
            data: user
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error
        })
    }
} 

const login = async (req, res, next) => {
    const user  = await User.findOne({
        where: {
            email: req.body.email
        }
    })

    if(!user) {
        res.status(404).json({
            status: false,
            message: "User not found"
        })
    }

    if(compare(req.body.password, user.password)) {
        const payload = {
            id: user.id,
            name: user.name,
            password: user.password,
            email: user.email
        }
        const token = generateAccessToken(payload)
        res.status(200).json({
            status: true,
            message: "User logged in successfully",
            data: {
                token: token,
                name: user.name,
                email: user.email
            }
        })
    } else {
        res.status(400).json({
            status: false,
            message: "Wrong password"
        })
    }
}

export {
    register, login
}