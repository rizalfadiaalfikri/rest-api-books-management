import express from 'express';
import bookRouter from './book.js';
import authRouter from './auth.js';
import genreRouter from './genre.js';
import purchaseRouter from './purchase.js';
import salesRouter from './sales.js';

const route = express.Router();

route.use('/api', purchaseRouter);
route.use('/api', salesRouter);
route.use('/api', bookRouter);
route.use('/api', genreRouter);
route.use('/api', authRouter);
route.use("*", (req, res) => {
    res.status(404).json({
        status: 404,
        message: "Not Found"
    })
})

export default route;