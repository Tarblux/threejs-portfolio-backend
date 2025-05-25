const { Pool } = require('pg');

const pool2 = new Pool({
  connectionString: process.env.DATABASE_URL_2,
  ssl: { rejectUnauthorized: false }
});

async function getLatestArsenalStandings() {
  const client = await pool2.connect();
  try {
    const result = await client.query('SELECT * FROM arsenal_standings ORDER BY id DESC LIMIT 1');
    return result.rows[0] || null;
  } finally {
    client.release();
  }
}

module.exports = { getLatestArsenalStandings }; 