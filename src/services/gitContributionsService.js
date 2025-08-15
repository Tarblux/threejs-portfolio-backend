const { Pool } = require('pg');

const pool2 = new Pool({
  connectionString: process.env.DATABASE_URL_2
});

async function getLatestGitContribution() {
  const client = await pool2.connect();
  try {
    const result = await client.query('SELECT * FROM git_contributions ORDER BY updated_at DESC LIMIT 1');
    return result.rows[0] || null;
  } finally {
    client.release();
  }
}

module.exports = { getLatestGitContribution }; 