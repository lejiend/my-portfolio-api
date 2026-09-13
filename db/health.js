const mysql = require('mysql2/promise');
const { Client: PgClient } = require('pg');
const { MongoClient } = require('mongodb');

const TIMEOUT_MS = 3000;

async function checkMySQL() {
  const start = Date.now();
  let connection;
  try {
    connection = await mysql.createConnection({
      host: process.env.MYSQL_HOST || 'localhost',
      port: Number(process.env.MYSQL_PORT) || 3306,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      connectTimeout: TIMEOUT_MS
    });
    await connection.query('SELECT 1');
    return { status: 'up', responseTimeMs: Date.now() - start };
  } catch (err) {
    return { status: 'down', error: err.message, responseTimeMs: Date.now() - start };
  } finally {
    if (connection) await connection.end().catch(() => {});
  }
}

async function checkPostgres() {
  const start = Date.now();
  const client = new PgClient({
    host: process.env.POSTGRES_HOST || 'localhost',
    port: Number(process.env.POSTGRES_PORT) || 5432,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    connectionTimeoutMillis: TIMEOUT_MS
  });
  try {
    await client.connect();
    await client.query('SELECT 1');
    return { status: 'up', responseTimeMs: Date.now() - start };
  } catch (err) {
    return { status: 'down', error: err.message, responseTimeMs: Date.now() - start };
  } finally {
    await client.end().catch(() => {});
  }
}

async function checkMongo() {
  const start = Date.now();
  const uri = process.env.MONGO_URI
    || `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST || 'localhost'}:${process.env.MONGO_PORT || 27017}/?authSource=admin`;
  const client = new MongoClient(uri, { serverSelectionTimeoutMS: TIMEOUT_MS });
  try {
    await client.connect();
    await client.db('admin').command({ ping: 1 });
    return { status: 'up', responseTimeMs: Date.now() - start };
  } catch (err) {
    return { status: 'down', error: err.message, responseTimeMs: Date.now() - start };
  } finally {
    await client.close().catch(() => {});
  }
}

module.exports = { checkMySQL, checkPostgres, checkMongo };
