import express from "express";
import User from "../models/User.js";
import auth from "../middleware/auth.js";
import generateToken from "../tokenGenerate.js";
const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const foundUser = await User.findOne({ email });
  if (foundUser && (await foundUser.matchPassword(password))) {
    res.json({
      name: foundUser.name,
      email: foundUser.email,
      roles: foundUser.roles,
      token: generateToken(foundUser._id as string),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
  res.json({ message: "List of users" });
});

router.get("/logout", async (req, res) => {
  res.json({ message: "Logout" });
});

router.post("/register", (req, res) => {
  res.json({ message: "List of users" });
});

router.get("/delete", (req, res) => {
  res.json({ message: "List of users" });
});

// ???
router.get("/refresh", auth, (req, res) => {
  res.json({ message: "List of users" });
});

export default router;
