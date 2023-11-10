import  { Request, Response, Router } from 'express'
import AuthService from '../../services/auth.service';

const router = Router();
router.post('/login', (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const token = AuthService.login(email, password);

    return res.status(200).send({Authorization: token});
  } catch (error) {
    throw new Error(`Authorization error: ${error}`);
  }
})

export { router as authRoutes };
