import jwt from "jsonwebtoken";
import type { Request, Response, NextFunction } from "express";
import User from "../models/User.js";
import BlacklistedToken from "../models/BlacklistedToken.js";
import type { IUser } from "../types/User.js";

interface AuthRequest extends Request {
  user?: IUser;
}

interface JWTPayload extends jwt.JwtPayload {
  id: string;
}

const auth = async (req: AuthRequest, res: Response, next: NextFunction) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      // Bearer ax123dxsdrwssadesarsef
      token = req.headers.authorization.split(" ")[1];
      if (!token) {
        return res.status(401).json({ message: "No authorization token found in request" });
      }

      const secret = process.env.JWT_SECRET_KEY;
      if (!secret) {
        return res.status(500).json({ message: "Server configuration error" });
      }

      const decodedToken = jwt.verify(token, secret) as unknown as JWTPayload;

      const blacklistedToken = await BlacklistedToken.findOne({ token });
      if (blacklistedToken) {
        return res.status(401).json({ message: "Token has been invalidated" });
      }

      const user = await User.findById(decodedToken.id).select("-passwordHash");

      if (!user) {
        return res.status(401).json({ message: "User not found" });
      }

      req.user = user;

      next();
    } catch (error) {
      if (error instanceof jwt.TokenExpiredError) {
        return res.status(401).json({ message: "Token expired" });
      } else if (error instanceof jwt.JsonWebTokenError) {
        return res.status(401).json({ message: "Invalid token" });
      } else {
        return res.status(401).json({ message: "Authentication failed" });
      }
    }
  } else {
    res.status(401).json({ message: "Not authorized, no token" });
  }
};

export default auth;
