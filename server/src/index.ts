import app from "./app.js";

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Max Burgers API! /api-docs for swagger docs",
    status: "Server is running successfully",
    timestamp: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(`🍔 Max Burgers API server running on port ${PORT}`);
});
