import express from "express";
import dotenv from "dotenv";
// import cors from "cors";
import mongoose from "mongoose";
import routes from "./routes/index.js";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger-output.json" with { type: "json" };
const app = express();
dotenv.config();

if (!process.env.DB_CONN_STRING) {
  throw new Error("DB_CONNECT_URL environment variable is not defined");
} else {
  mongoose
    .connect(process.env.DB_CONN_STRING)
    .then(() => console.log("connected to db"))
    .catch((err: Error) => console.log("ERROR", err));
}

// app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));
app.use(express.json());
// app.use(express.json({ limit: '16kb' }));
// app.use(express.urlencoded({ extended: true, limit: '16kb' }));
// app.use(express.static('public'));

// Mount API routes under /api/v1 prefix
// app.use("/api/v1", routes);

// Serve Swagger documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

interface IKitten extends mongoose.Document {
  name?: string | null;
  speak(): void;
}

const kittySchema = new mongoose.Schema<IKitten>({
  name: String,
});

kittySchema.methods.speak = function speak() {
  const greeting = this.name ? "Meow name is " + this.name : "I don't have a name";
  console.log(greeting);
};

const Kitten = mongoose.model<IKitten>("Kitten", kittySchema);
const fluffy = new Kitten({ name: "fluffy" });
// fluffy.speak(); // "Meow name is fluffy"
await fluffy.save();
const kittens = await Kitten.find();
console.log(kittens);
const myKitten = await Kitten.find({ _id: "689f9a3fd21395dc47025459" });
console.log("myKitten", myKitten);

export default app;
