const { Pool } = require('pg');

const pool2 = new Pool({
  connectionString: process.env.DATABASE_URL_2,
  ssl: { rejectUnauthorized: false }
});

async function getGitRepoByName(repoName) {
  const client = await pool2.connect();
  try {
    const result = await client.query('SELECT * FROM git_repos WHERE repo_name = $1 ORDER BY last_fetched_at DESC LIMIT 1', [repoName]);
    return result.rows[0] || null;
  } finally {
    client.release();
  }
}

module.exports = { getGitRepoByName }; 