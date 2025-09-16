import { Client } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

async function createDatabase(dbName) {
	// Connect to the default "postgres" database
	const client = new Client({
		user: process.env.DB_USER, // e.g., "postgres"
		host: process.env.DB_HOST, // e.g., "localhost"
		database: 'postgres', // must NOT be the target DB
		password: process.env.DB_PASSWORD,
		port: parseInt(process.env.DB_PORT, 10),
	});

	try {
		await client.connect();

		// Create the new database if it doesn’t already exist
		const query = `CREATE DATABASE ${dbName}`;
		await client.query(query);

		console.log(`✅ Database "${dbName}" created successfully`);
	} catch (err) {
		if (err.code === '42P04') {
			// PostgreSQL error code 42P04 = database already exists
			console.log(`⚠️ Database "${dbName}" already exists`);
		} else {
			console.error('❌ Error creating database:', err);
		}
	} finally {
		await client.end();
	}
}

createDatabase('creaturesshop_db2');
