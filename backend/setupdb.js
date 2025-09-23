import { Client } from 'pg';
import fs from 'fs';
import csv from 'csv-parser';
import dotenv from 'dotenv';
dotenv.config();

const createDatabase = async (dbName) => {
	const client = new Client({
		user: process.env.DB_USER,
		host: process.env.DB_HOST,
		database: 'postgres', // ACHTUNG! IST NICHT DER DATABASENAME WIE SPÄTER. DA DIE DB HIER ANGELEGT WIRD!
		password: process.env.DB_PASSWORD,
		port: parseInt(process.env.DB_PORT, 10),
	});

	try {
		await client.connect();
		const query = `CREATE DATABASE ${dbName}`;
		await client.query(query);

		console.log(`✅ Database "${dbName}" created successfully`);
	} catch (err) {
		if (err.code === '42P04') {
			console.log(`⚠️ Database "${dbName}" already exists`);
		} else {
			console.error('❌ Error creating database:', err);
		}
	} finally {
		await client.end();
	}
};

const createTableAndRows = async () => {
	const client = new Client({
		user: process.env.DB_USER,
		host: process.env.DB_HOST,
		database: process.env.DB_NAME,
		password: process.env.DB_PASSWORD,
		port: parseInt(process.env.DB_PORT, 10),
	});
	try {
		await client.connect();
		await client.query(`
    CREATE TABLE IF NOT EXISTS creatures (
      id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
      product_id TEXT,
      product_name TEXT,
      price NUMERIC,
      size NUMERIC,
      weight NUMERIC,
      talent TEXT,
      feature TEXT,
      front_url TEXT,
      side_url TEXT,
      back_url TEXT
    );
  `);
		await client.query(`
		  CREATE TABLE IF NOT EXISTS account (
		    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
		    name TEXT,
		    email TEXT,
		    password TEXT
		  );
		`);
		await client.query(`
		  CREATE TABLE IF NOT EXISTS basketitems (
		    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
		    product_id BIGINT,
		    account_id BIGINT
		  );
		`);
	} catch (err) {
		console.error('❌ Error creating table/rows:', err);
	} finally {
		await client.end();
	}
};

const parseCSV = async (csvFilePath) => {
	const results = [];

	await new Promise((resolve, reject) => {
		fs.createReadStream(csvFilePath, { encoding: 'utf8' })
			.pipe(csv())
			.on('data', (row) => results.push(row))
			.on('end', resolve)
			.on('error', reject);
	});

	if (results.length === 0) {
		console.log('No data found in CSV.');
		return;
	}
	return results;
};

const createQueryAndQueryData = async (parsedCSVData, creatureTableName) => {
	const returnObj = {};
	const columns = Object.keys(parsedCSVData[0]);
	const values = [];
	const params = [];

	parsedCSVData.forEach((row, rowIndex) => {
		const placeholders = columns.map(
			(_, colIndex) => `$${rowIndex * columns.length + colIndex + 1}`
		);
		params.push(`(${placeholders.join(', ')})`);
		values.push(...columns.map((col) => row[col]));
	});

	const query = `
    INSERT INTO ${creatureTableName} (${columns.join(', ')})
    VALUES ${params.join(', ')}
  `;
	returnObj.values = values;
	returnObj.query = query;
	return returnObj;
};

const fillDbWithData = async ({ query, values }, tableName) => {
	const client = new Client({
		user: process.env.DB_USER,
		host: process.env.DB_HOST,
		database: process.env.DB_NAME,
		password: process.env.DB_PASSWORD,
		port: parseInt(process.env.DB_PORT, 10),
	});

	try {
		await client.connect();
		const res = await client.query(query, values);
		console.log(`Inserted ${res.rowCount} rows into ${tableName}`);
	} catch (err) {
		console.error('Error inserting data:', err);
	} finally {
		await client.end();
	}
};

const createDB = async () => {
	const creatureTableName = 'creatures';
	try {
		const database = await createDatabase(process.env.DB_NAME);
		await new Promise((res) => setTimeout(res, 1000));
		const table = await createTableAndRows();
		const parsedCSVData = await parseCSV('creatures.csv');
		const queryAndValueObj = await createQueryAndQueryData(
			parsedCSVData,
			creatureTableName
		);
		const filledDb = await fillDbWithData(queryAndValueObj, creatureTableName);
	} catch (err) {
		console.error('Error:', err);
	}
};

createDB();
