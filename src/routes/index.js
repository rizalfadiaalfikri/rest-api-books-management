import express from 'express';
import userRouter from './book.js';

const route = express.Router();

route.use('/api', userRouter);
route.use("*", (req, res) => {
    res.status(404).json({
        status: 404,
        message: "Not Found"
    })
})

export default route;