const { getRatingsByTimeControl } = require('../services/chessGamesService');

async function ratingsBulletHandler(req, res) {
  try {
    const { period, startDate, endDate } = req.query;
    const data = await getRatingsByTimeControl('bullet', { period, startDate, endDate });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = ratingsBulletHandler; 