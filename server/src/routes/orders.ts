import express from "express";
import Order from "../models/Order.js";
const router = express.Router();

router.get("/", async (req, res) => {
  const orders = await Order.find();
  res.json({ orders });
});

router.get("/create", async (req, res) => {
  res.json({ message: "List of users" });
});

router.put("/update", (req, res) => {
  res.json({ message: "List of users" });
});

router.get("/create", (req, res) => {
  res.json({ message: "List of users" });
});

export default router;
