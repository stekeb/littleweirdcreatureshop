import express from 'express'; // Express laden
// require('dotenv').config(); // .env laden (muss nicht sein in Produktion)
import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });
import cors from 'cors';
import { Pool } from 'pg';
const host = process.env.HOST;
const pool = new Pool({
	user: process.env.DB_USER,
	host: process.env.DB_HOST,
	database: process.env.DB_NAME,
	password: process.env.DB_PASSWORD,
	port: parseInt(process.env.DB_PORT),
});
const app = express(); // App-Instanz erzeugen

app.use(express.json()); // JSON-Body unterstützen
app.use(express.urlencoded({ extended: false })); // x-www-form-urlencoded (Key/Value)

app.use(cors());

// Route aus server.js
app.get('/', async (req, res) => {
	const result = await pool.query('SELECT * FROM creatures;');
	res.send(JSON.stringify(result.rows));
});

app.get('/health', async (_req, res) => {
  // Gesundheitscheck mit DB-Probe
  try {
    const result = await pool.query('SELECT 1'); // einfacher Test
    if (result) {
      return res.json({ status: 'ok', db: 'up' });
    }
  } catch (err) {
    return res.status(500).json({ status: 'degraded', db: 'down' });
  }
});

app.get('/filter', async (req, res) => {

	  try {
    const result = await pool.query('SELECT 1'); // einfacher Test
    res.send(JSON.stringify(result.rows));
  } catch (err) {
    return res.status(500).json({ status: err });
  }

})

const PORT = process.env.PORT || 8000; // Port aus env oder Fallback 8000

// Für server.js-Kompatibilität zusätzlich eine port-Variable (nutzen wir unten in app.listen)
const port = Number(PORT);


// console.log(process.env.DB_USER);
// const port = 3000;
app.listen(port, host, () => {
	// Server starten
	console.log(`Example app listening on port ${port}`); // aus server.js
	console.log(`API läuft auf http://localhost:${port}`); // bestehendes Log beibehalten
});
