import express from 'express';
import { IndexController } from '../controllers/index.controller'

const router = express.Router()
const indexController = new IndexController()

router.get('/', indexController.landingPage)
router.get('/test', indexController.testWorking)

export default router
