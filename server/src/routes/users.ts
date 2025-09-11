import express from "express";
import type { Request } from "express";
import User from "../models/User.js";
import BlacklistedToken from "../models/BlacklistedToken.js";
import auth from "../middleware/auth.js";
import generateToken from "../tokenGenerate.js";
import jwt from "jsonwebtoken";
import type { IUser } from "../types/User.js";

interface AuthRequest extends Request {
  user?: IUser;
}
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
});

router.post("/logout", auth, async (req: AuthRequest, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (token) {
      // Decode token to get expiration time
      const decoded = jwt.decode(token) as jwt.JwtPayload;
      const expiresAt = new Date((decoded.exp || 0) * 1000);

      // Add token to blacklist
      await BlacklistedToken.create({
        token,
        expiresAt,
        userId: req.user?._id,
      });
    }

    res.status(200).json({
      message: "Logged out successfully",
      tokenBlacklisted: true,
    });
  } catch {
    res.status(500).json({ message: "Error during logout" });
  }
});

router.post("/register", (req, res) => {});

router.get("/delete", (req, res) => {
  res.json({ message: "List of users" });
});

// ???
router.get("/refresh", auth, (req, res) => {
  res.json({ message: "List of users" });
});

export default router;
