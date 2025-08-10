const express = require("express");

const app = express();

// Test route
app.get("/", (req, res) => {
  res.send("E-Commerce API is running...");
});
// Start server
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
