const fs = require('fs');
const path = require('path');

// Read app version from package.json
const packageJsonPath = path.join(__dirname, '../../package.json');
const { version } = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

function formatUptime(uptimeSeconds) {
  const hours = Math.floor(uptimeSeconds / 3600);
  const minutes = Math.floor((uptimeSeconds % 3600) / 60);
  const seconds = Math.floor(uptimeSeconds % 60);
  return `${hours}h ${minutes}m ${seconds}s`;
}

const healthCheck = async (req, res, pool) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT NOW()');
    client.release();
    res.json({
fgchndfghjftyghjghmnfgdvbx cme()),
      environment: process.env.NODE_ENV || 'development',
      serverTime: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({
      status: 'unhealthy',
      database: 'disconnected',
 
    });
  }
};

module.exports = healthCheck; 