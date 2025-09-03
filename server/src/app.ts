import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import routes from "./routes/index.js";
import databaseSeederRoutes from "./databaseSeeder.js";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger-output.json" with { type: "json" };
const app = express();
dotenv.config();

if (!process.env.DB_CONN_STRING || !process.env.DB_NAME) {
  throw new Error("DB_CONNECT_URL environment variable is not defined");
} else {
  mongoose
    .connect(process.env.DB_CONN_STRING, {
      dbName: process.env.DB_NAME || "app",
    })
    .then(() => console.log("connected to db"))
    .catch((err: Error) => console.log("ERROR", err));
}

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3000"],
    credentials: true,
  }),
);
app.use(express.json());

// Mount API routes under /api/v1 prefix
app.use("/api/v1", routes);
app.use("/api/v1/seed", databaseSeederRoutes);
// app.use(express.json({ limit: '16kb' }));
// app.use(express.urlencoded({ extended: true, limit: '16kb' }));
// app.use(express.static('public'));

// Serve Swagger documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default app;
