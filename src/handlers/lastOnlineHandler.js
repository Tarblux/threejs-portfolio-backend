const { getLastOnline } = require('../services/lastOnlineService');

async function lastOnlineHandler(req, res) {
  try {
    const lastOnline = await getLastOnline();
    res.json(lastOnline);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = lastOnlineHandler; 