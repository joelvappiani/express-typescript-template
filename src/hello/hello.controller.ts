import { Router, Request, Response } from 'express';
import { sayHello } from './hello.service';
const router = Router();

router.get('/test', (req: Request, res: Response): void => {
    const hello = sayHello()
    res.send(hello)
})
export default router;
