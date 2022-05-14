import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.port;

console.log(port);

app.get('/', (req, res) => {
  res.send('Welcome to Omega36');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
