import { Request, Response, NextFunction } from 'express';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).send(err);
    next(err)
    throw new Error('Something went wrong')
};