import { NextFunction, Request, Response, } from 'express';

import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config';

interface JwtPayload {
    _id: string
  }

export default (req: Request, res: Response, next: NextFunction) => {

    const { authorization } = req.headers;

    if (!authorization || !authorization.startsWith('Bearer ')) {
        res.status(401).json({ message: "Invalid credentials" });
        return;
    }
    const token = authorization.replace('Bearer ', '');
    let payload: JwtPayload | null = null;
    try {
        payload = jwt.verify(token, JWT_SECRET) as JwtPayload;
        //@ts-ignore
        req.user = payload;
        next();
    } catch {
        res.status(401).json({ message: "Invalid credentials" });
        return;
    }
}; 