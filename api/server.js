import express from 'express';
import dotenv from 'dotenv';
import artifactRoutes from './src/routes/artifactRoutes.js';
import qrRoutes from './src/routes/qrCodes.js';
import { errorHandler } from './src/middlewares/errorHandler.js';
import connectDB  from './db.js';
import cors from 'cors'; 

dotenv.config();
const app = express();



// CORS setup
app.use(cors({
  origin: 'http://localhost:3000', // Replace with your frontend domain
  methods: 'GET',
  allowedHeaders: 'Content-Type',
}));
const PORT = process.env.PORT || 5000;

connectDB();
app.use(express.json());
app.use('/api/artifacts', artifactRoutes);
app.use('/api/qr-codes', qrRoutes);

app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});





