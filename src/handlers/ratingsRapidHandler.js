const { getRatingsByTimeControl } = require('../services/chessGamesService');

async function ratingsRapidHandler(req, res) {
  try {
    const { period, startDate, endDate } = req.query;
    const data = await getRatingsByTimeControl('rapid', { period, startDate, endDate });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = ratingsRapidHandler; 