import express from 'express';

import cors from 'cors';
import morgan from 'morgan';
import indexRouter from './hello/hello.controller'
import { notFound } from './middlewares';

const app = express()


app.use(cors())
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter)

app.use(notFound)


export default app