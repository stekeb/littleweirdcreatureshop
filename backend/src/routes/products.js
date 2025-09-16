// const express = require("express");                 // Router-API
import express from 'express'; // Router-API
const router = express.Router(); // Router-Instanz

// const products = require('../data/products.sample.json'); // Demo-Daten laden
import products from '../data/products.sample.json' with { type: 'json' }; // Demo-Daten laden

// GET /products
router.get('/', (_req, res) => {
	// vollständige Liste
	res.json({ items: products, total: products.length }); // Anzahl und Items zurückgeben
});

router.get('/filter', (req, res) => {
	// Filter-Endpunkt
	const { size, ability, minprice, maxprice } = req.query; // Query-Parameter lesen
	let list = [...products]; // Arbeitskopie

	if (size) list = list.filter((p) => String(p.size || '') === String(size)); // Größenfilter
	if (ability) {
		// Fähigkeiten (case-insensitive)
		const wanted = String(ability).toLowerCase();
		list = list.filter((p) => String(p.ability || '').toLowerCase() === wanted);
	}
	if (minprice && !Number.isNaN(Number(minprice))) {
		// Mindestpreis in Cents
		list = list.filter((p) => Number(p.price) >= Number(minprice));
	}
	if (maxprice && !Number.isNaN(Number(maxprice))) {
		// Höchstpreis in Cents
		list = list.filter((p) => Number(p.price) <= Number(maxprice));
	}

	res.json({ items: list, total: list.length }); // Ergebnisliste zurückgeben
});

// module.exports = router; // Router exportieren
export default router; // Router exportieren
