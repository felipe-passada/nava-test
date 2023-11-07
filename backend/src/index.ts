import express ,{ Application, } from 'express';
import mongoose from 'mongoose';

import dotenv from 'dotenv';
import routes from './routes/';

dotenv.config()
const app:Application = express();
const port:any = process.env.PORT || 8080;


app.use(routes);
app.listen(port);

// mongoose.connect('mogodb://127.0.0.1:27017/test');

console.log(`Server running at http://localhost:${port}`);
