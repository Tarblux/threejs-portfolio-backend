const { getLatestRanksAndPercentiles } = require('../services/chessRankService');

async function chessRankHandler(req, res) {
  try {
    const data = await getLatestRanksAndPercentiles();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = chessRankHandler; 