import express ,{ Application, } from 'express';

import dotenv from 'dotenv';
import routes from './routes/';

dotenv.config()
const app:Application = express();
const port:any = process.env.PORT || 8080;


app.use(routes);
app.listen(port);

console.log(`Server running at http://localhost:${port}`);
