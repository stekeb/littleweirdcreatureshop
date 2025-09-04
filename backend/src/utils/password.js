const bcrypt = require("bcryptjs");        // Modul für Hashing laden
const SALT_ROUNDS = 10;                    // Arbeitsfaktor (Kosten) für Hashing

async function hashPassword(plain) {       // Klartext → Hash
  return bcrypt.hash(plain, SALT_ROUNDS);  // Hash mit Salz und Kostenfaktor erzeugen
}

async function verifyPassword(plain, hash) { // Klartext vs. Hash prüfen
  return bcrypt.compare(plain, hash);        // True/False je nach Übereinstimmung
}

module.exports = { hashPassword, verifyPassword }; // Funktionen exportieren
