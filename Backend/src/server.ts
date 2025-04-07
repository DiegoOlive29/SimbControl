import express, { Express } from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import authRoutes from "./routes/authRoutes";

const prisma = new PrismaClient();
const app: Express = express();
const PORT = 3000;

declare global {
  namespace Express {
    interface Request {
      prisma: PrismaClient;
    }
  }
}

app.use(cors());
app.use(express.json());

app.use((req, _, next) => {
  req.prisma = prisma;
  next();
});

app.use("", authRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
