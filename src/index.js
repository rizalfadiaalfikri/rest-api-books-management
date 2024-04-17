import express from 'express';
import 'dotenv/config'
import appMiddleware from './middleware/index.js';

const port = process.env.PORT || 3000

const app = express()
app.use(appMiddleware)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})