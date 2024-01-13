import { Request, Response } from 'express';

export class IndexService {
    public generateRandomNumber() {
        return Math.floor(Math.random() * 1000)
    }
}