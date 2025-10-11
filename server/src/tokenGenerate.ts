import jwt from "jsonwebtoken";

const generateToken = (id: string) => {
  if (!process.env.JWT_SECRET_KEY) {
    throw new Error("JWT_SECRET_KEY environment variable is required");
  }
  return jwt.sign({ id }, process.env.JWT_SECRET_KEY, { expiresIn: "24h" });
};

export default generateToken;
