require("dotenv").config();
const express = require("express");

const app = express();

// Health-Endpoint
app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`API läuft auf http://localhost:${PORT}`);
});