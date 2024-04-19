import sequelize from "../model/index.js";

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

export {
    register
}