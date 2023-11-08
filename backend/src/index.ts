import express ,{ Application, } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import dotenv from 'dotenv';
import routes from './routes/';

dotenv.config()
const app:Application = express();
const port:any = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(routes);
app.listen(port);

mongoose.connect('mongodb://127.0.0.1:27017/local');

console.log(`Server running at http://localhost:${port}`);
