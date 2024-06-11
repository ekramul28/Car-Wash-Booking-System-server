import express, { Application } from 'express';
import cors from 'cors';
import notFound from './app/middlewares/notFound';
const app: Application = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(notFound);

export default app;
