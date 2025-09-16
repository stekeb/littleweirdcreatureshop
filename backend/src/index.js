// const express = require("express");             // Express laden
import express from 'express'; // Express laden
// require('dotenv').config(); // .env laden (muss nicht sein in Produktion)
import dotenv from 'dotenv';
dotenv.config();
const app = express(); // App-Instanz erzeugen

import authRouter from './routes/auth.js';
import productsRouter from './routes/products.js';

app.use(express.json()); // JSON-Body unterstützen
app.use(express.urlencoded({ extended: false })); // x-www-form-urlencoded (Key/Value)

app.get('/health', (_req, res) => {
	// Gesundheitscheck
	res.json({ status: 'ok' });
});

// app.use('/auth', require('./routes/auth')); // Auth-Router unter /auth einhängen
// app.use('/products', require('./routes/products')); // Products-Router unter /products

app.use('/auth', authRouter); // Auth-Router unter /auth einhängen
app.use('/products', productsRouter); // Products-Router unter /products

const PORT = process.env.PORT || 8000; // Port aus env oder Fallback 8000
app.listen(PORT, () => {
	// Server starten
	console.log(`API läuft auf http://localhost:${PORT}`);
});
