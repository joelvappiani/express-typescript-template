import { Request, Response } from 'express';
import { IndexService } from '../services/index.service';

const indexService = new IndexService()

export class IndexController {
    public landingPage(req: Request, res: Response) {
        try {
            res.status(200).send('Express API');
        } catch (error) {
            res.status(500).send(error)
        }
    }


    public testWorking(req: Request, res: Response) {
        try {
            const randomNumber = indexService.generateRandomNumber()
            res.status(200).json({ result: true, message: 'API Working!', randomNumber });
        } catch (error) {
            res.status(500).send(error)
        }
    }
}