import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'

import indexRouter from './routes/index.route'

dotenv.config()
const app = express()


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter)

const port = process.env.PORT || '3000'

app.listen(port, () => {
    console.log(`Server connected on port ${port}`)
})

export default app