import express from "express";
import User from "../models/User.js";
const router = express.Router();

router.get("/login", (req, res) => {
  // const { email, passwordHash } = req.body
  // const foundUser = User.findOne({email: email});
  res.json({ message: "List of users" });
});

router.get("/logout", async (req, res) => {
  res.json({ message: "Logout" });
});

router.get("/register", (req, res) => {
  res.json({ message: "List of users" });
});

router.get("/delete", (req, res) => {
  res.json({ message: "List of users" });
});

export default router;
