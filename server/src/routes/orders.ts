import express from "express";
import Order from "../models/Order.js";
const router = express.Router();

router.get("/", async (req, res) => {
  /*  #swagger.tags = ['Orders']  */
  const orders = await Order.find();
  res.json({ orders });
});

router.post("/create", async (req, res) => {
  /*  #swagger.tags = ['Orders']  */
  const { user } = req.body;
  res.json({ message: "List of users" });
});

router.put("/update", (req, res) => {
  /*  #swagger.tags = ['Orders']  */
  res.json({ message: "List of users" });
});

router.delete("/delete", async (req, res) => {
  /*  #swagger.tags = ['Orders']  */
  res.json({ message: "Deleted order" });
});

export default router;
