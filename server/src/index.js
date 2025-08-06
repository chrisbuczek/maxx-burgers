const express = require("express");

const app = express();
const PORT = process.env.PORT || 9000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Max Burgers API!",
    status: "Server is running successfully",
    timestamp: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(`🍔 Max Burgers API server running on port ${PORT}`);
});
