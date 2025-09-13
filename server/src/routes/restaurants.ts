import express from "express";
import Restaurant from "../models/Restaurant.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const restaurants = await Restaurant.find();
  res.json({ restaurants });
});

export default router;
