// const express = require("express");                      // Router-API von Express
// const { hashPassword, verifyPassword } = require("../utils/password"); // Hash-Helfer

import express from 'express'; // Router-API von Express
import { hashPassword, verifyPassword } from '../utils/password.js'; // Hash-Helfer

const router = express.Router(); // Router-Instanz anlegen

const users = []; // In-Memory-„Datenbank“
let nextId = 1; // Laufende ID-Vergabe

// POST /auth/register
router.post('/register', async (req, res) => {
	// Endpoint für Registrierung
	const { accountname, password } = req.body || {}; // Body-Felder lesen
	if (!accountname || !password) {
		// Pflichtfelder prüfen
		return res
			.status(400)
			.json({ message: 'accountname und password sind erforderlich' });
	}

	const exists = users.find((u) => u.accountname === accountname); // Duplikat prüfen
	if (exists) {
		// bereits vorhanden → 409
		return res.status(409).json({ message: 'Accountname bereits vergeben' });
	}

	const passwordHash = await hashPassword(password); // bcrypt-Hash erstellen
	const user = { id: nextId++, accountname, passwordHash }; // Nutzerobjekt bauen
	users.push(user); // speichern (RAM)

	return res.status(201).json({ id: user.id, accountname: user.accountname }); // Rückgabe ohne Hash
});

// POST /auth/login
router.post('/login', async (req, res) => {
	// Endpoint fürs Login
	const { accountname, password } = req.body || {}; // Body-Felder lesen
	if (!accountname || !password) {
		// Pflichtfelder prüfen
		return res
			.status(400)
			.json({ message: 'accountname und password sind erforderlich' });
	}

	const user = users.find((u) => u.accountname === accountname); // User lookup
	if (!user) {
		// nicht gefunden → 401
		return res.status(401).json({ message: 'Ungültige Zugangsdaten' });
	}

	const ok = await verifyPassword(password, user.passwordHash); // Hash-Vergleich
	if (!ok) {
		// falsch → 401
		return res.status(401).json({ message: 'Ungültige Zugangsdaten' });
	}

	return res.json({ message: 'Login erfolgreich' }); // Erfolgsmeldung (ohne Token/Session)
});

// POST /auth/logout
router.post('/logout', (_req, res) => {
	// Platzhalter ohne Session
	return res.json({ message: 'Logout ok' }); // Bestätigung
});

// module.exports = router; // Router exportieren
export default router; // Router exportieren
