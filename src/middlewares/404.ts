import { Request, Response } from 'express';

export const notFound = (req: Request, res: Response) => {
    throw new Error('Route not found')
};