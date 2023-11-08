import  { Request, Response, Router } from 'express'
import jsonwebtoken from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();

const PRIVATE_KEY:string = process.env.PRIVATE_KEY || "";
const user = {
  email: process.env.email,
  password: process.env.password
}

const router = Router();
router.get('/login', (req: Request, res: Response) => {
  console.log('BEGIN LOGIN')
  const [, hash] = req.headers.authorization?.split(' ') || [' ', ' '];
  const [email, password] = Buffer.from(hash, 'base64').toString().split(':');

  try {
    const correctPassword = email === user.email && password === user.password;

    if(!correctPassword) return res.status(401).send('Email or password incorrect!')

    const token = jsonwebtoken.sign(
      { user: JSON.stringify(user) },
      PRIVATE_KEY,
      {expiresIn: '60m'}
    )

    return res.status(200).json({data: { user, token }});
  } catch(err) {
    console.error(err);
    return res.send(err);
  }
})

export { router as authRoutes };
