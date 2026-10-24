import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { dbAdapter } from './config/dbAdapter.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Ruta de comprobación de salud y modo demo
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'PayPact AI Backend' });
});

app.get('/api/agreement', async (req, res) => {
  const agreement = await dbAdapter.getAgreement();
  res.json(agreement);
});

app.post('/api/demo/reset', (req, res) => {
  const resetData = dbAdapter.resetToSeed();
  res.json({ message: 'Demo reseteada con éxito', data: resetData });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`PayPact AI Backend activo en http://localhost:${PORT}`);
});