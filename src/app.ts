import express, { Application } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import notFound from './app/middlewares/notFound';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import router from './app/routes';
const app: Application = express();

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: ['http://localhost:5173'],
    credentials: true,
  }),
);

app.use('/api/v1', router);

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.use(globalErrorHandler);

app.use(notFound);

export default app;
