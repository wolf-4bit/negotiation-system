import { Request, Response } from 'express';
import express from 'express';
const app = express();
const port = 3000;

app.get('/health', (req: Request, res: Response) => {
  res.status(200).send('OK');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});