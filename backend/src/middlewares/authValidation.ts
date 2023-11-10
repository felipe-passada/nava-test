import { Request, Response } from 'express';
import jsonwebtoken from 'jsonwebtoken';

const JWT_SECRET:string = process.env.JWT_SECRET || "";
const USER = {
  email: process.env.email,
  password: process.env.password
}

export function validateToken(req: Request, res: Response, next:Function) {
  const [, token] = req.headers.authorization?.split(' ') || [' ', ' '];

  if(!token) return res.status(401).send('Access denied. No token provided.');

  try {
    const payload = jsonwebtoken.verify(token, JWT_SECRET);
    const userIdFromToken = typeof payload !== 'string' && payload.user;

    if(!USER && !userIdFromToken) {
      return res.send(401).json({ message: 'Invalid token' });
    }

    return next();
  } catch(error) {
    console.log(error);
    return res.status(401).json({ message: 'Invalid token' });
  }
 }
