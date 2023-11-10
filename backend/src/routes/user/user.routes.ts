import { Router, Request, Response } from 'express';
import { validateToken } from '../../middlewares/authValidation';
import {
  createUsers,
  updateUser,
  findUser,
  findUsers,
  deleteUser
} from '../../controllers/user.controller';

const router = Router();

// router.use(validateToken)
// router.use('*', validateToken);

router.post('/users', async (req: Request, res: Response) => {
  try {
    const result = await createUsers();
    return res.status(201).send(result);
  } catch (error) {
    console.error("Error while creating users batch", error)
  }
})

router.get('/users', validateToken, async (req: Request, res: Response) => {
  try {
    const result = await findUsers();
    return res.status(200).send(result);
  } catch (error) {
    console.error("Error while loading users", error)
    return res.status(400).send({ message: "error while fetching users "})
  }
})

router.get('/users/:id', async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await findUser(id);

    return res.status(200).send(result);
  } catch (error) {
    console.error("User not found!", error);
    return res.status(404).send({ message: "User not found" });
  }
})

router.put('/users/:id', async (req: Request, res: Response) => {
  const id = req.params.id;
  const payload = req.body;
  console.log("[USER ROUTE]: ", payload)
  const result = await updateUser(id, payload);

  return res.status(200).send(result);
})

router.delete('/users/:id', async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await deleteUser(id);

  return res.status(200).send({ data: result, message: "user deleted" });
})

export { router as userRoutes };
