import express from 'express';

const appMiddleware = express();

appMiddleware.use(express.json())

export default appMiddleware;