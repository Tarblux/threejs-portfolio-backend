const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});


async function getLatestRanksAndPercentiles() {
  const client = await pool.connect();
  try {
    // Get the latest date for each time_control
    const subquery = `
      SELECT time_control, MAX(date) as max_date
      FROM chess_rank
      GROUP BY time_control
    `;
    // Join to get the full row for each time_control's latest date
    const query = `
      SELECT cr.date, cr.time_control, cr.global_rank, cr.percentile
      FROM chess_rank cr
      INNER JOIN (${subquery}) sub
        ON cr.time_control = sub.time_control AND cr.date = sub.max_date
      ORDER BY cr.time_control ASC
    `;
    const result = await client.query(query);
    return result.rows;
  } finally {
    client.release();
  }
}

module.exports = { getLatestRanksAndPercentiles }; 