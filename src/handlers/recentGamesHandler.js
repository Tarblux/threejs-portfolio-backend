const { getRecentGames } = require('../services/chessGamesService');

async function recentGamesHandler(req, res) {
  try {
    const games = await getRecentGames();
    res.json(games);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = recentGamesHandler; 