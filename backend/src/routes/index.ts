import { Router } from 'express';

import { authRoutes } from './auth/auth.routes';
import { userRoutes } from './user/user.routes';

const routes = Router();

routes.use('/', authRoutes, userRoutes);

export default routes;
