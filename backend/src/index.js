require("dotenv").config();                     // .env laden (muss nicht sein in Produktion)
const express = require("express");             // Express laden

const app = express();                          // App-Instanz erzeugen

app.use(express.json());                        // JSON-Body unterstützen
app.use(express.urlencoded({ extended: false })); // x-www-form-urlencoded (Key/Value)

app.get("/health", (_req, res) => {             // Gesundheitscheck
  res.json({ status: "ok" });
});

app.use("/auth", require("./routes/auth"));     // Auth-Router unter /auth einhängen
app.use("/products", require("./routes/products")); // Products-Router unter /products

const PORT = process.env.PORT || 8000;          // Port aus env oder Fallback 8000
app.listen(PORT, () => {                        // Server starten
  console.log(`API läuft auf http://localhost:${PORT}`);
});
