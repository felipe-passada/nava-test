import { Router } from 'express';

import { authRoutes } from './auth/auth';
import { userRoutes } from './user/user';

const routes = Router();

routes.use('/', authRoutes, userRoutes);

export default routes;
