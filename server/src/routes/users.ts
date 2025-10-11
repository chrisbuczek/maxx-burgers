import express from "express";
import type { Request } from "express";
import User from "../models/User.js";
import BlacklistedToken from "../models/BlacklistedToken.js";
import auth from "../middleware/auth.js";
import generateToken from "../tokenGenerate.js";
import jwt from "jsonwebtoken";
import type { IUser } from "../types/User.js";
import { registerSchema } from "../validators/userValidators.js";
import { validate } from "../middleware/validate.js";
import Order from "../models/Order.js";

interface AuthRequest extends Request {
  user?: IUser;
}
const router = express.Router();

router.post("/login", async (req, res) => {
  /*  #swagger.tags = ['Authentication'] */
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
    res.status(401).json({ message: "Invalid email or password" });
  }
});

router.post("/logout", auth, async (req: AuthRequest, res) => {
  /*  #swagger.tags = ['Authentication'] */
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (token) {
      const decoded = jwt.decode(token) as jwt.JwtPayload;
      const expiresAt = new Date((decoded.exp || 0) * 1000);

      await BlacklistedToken.create({
        token,
        expiresAt,
        userId: req.user?._id,
      });
    }

    //  TODO: create CRON job every 24 hours which deletes tokens older than today
    //  await BlacklistedToken.deleteMany({
    //  expiresAt: { $lt: new Date() } // $lt - less than
    //  });

    res.status(200).json({
      message: "Logged out successfully",
      tokenBlacklisted: true,
    });
  } catch {
    res.status(500).json({ message: "Error during logout" });
  }
});

router.post("/register", validate(registerSchema), async (req, res) => {
  /*  #swagger.tags = ['Authentication']  */
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        message: "User already exists with this email",
      });
    }

    const newUser = await User.create({
      name,
      email,
      passwordHash: password,
    });

    res.status(201).json({
      message: "User created successfully",
      user: {
        name: newUser.name,
        email: newUser.email,
        roles: newUser.roles,
      },
    });
  } catch {
    res.status(500).json({ message: "Internal server error" });
  }
});

router.delete("/delete", auth, async (req: AuthRequest, res) => {
  /*  #swagger.tags = ['Authentication'] */
  try {
    const userId = req.user?._id;

    if (!userId) {
      return res.status(401).json({ message: "User not authenticated" });
    }

    // anonymize orders
    await Order.updateMany({ userId }, { userId: null, isAnonymized: true });

    const deleteResult = await User.deleteOne({ _id: userId });

    if (deleteResult.deletedCount === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "User account deleted successfully",
      ordersAnonymized: true,
    });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Protected route example
router.get("/refresh", auth, async (req, res) => {
  /*  #swagger.tags = ['Authentication'] */
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (token) {
      const decoded = jwt.decode(token) as jwt.JwtPayload;
      const expiresAt = new Date((decoded.exp || 0) * 1000);
    }

    res.status(200).json({
      message: "Logged out successfully",
      tokenBlacklisted: true,
    });
  } catch {
    res.status(500).json({ message: "Error during logout" });
  }
});

export default router;
