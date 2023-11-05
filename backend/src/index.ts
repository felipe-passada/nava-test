import express ,{ Express, Request, Response, Application, } from 'express';

import dotenv from 'dotenv';
import { getUserData } from './api/random';

dotenv.config()
const app:Application = express();
const port:any = process.env.PORT || 8080;

app.get('/', (req: Request, res: Response) => {
  console.log('Health Check OK')
})
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
})
