const { getLatestArsenalStandings } = require('../services/arsenalStandingsService');

async function arsenalStandingsHandler(req, res) {
  try {
    const latest = await getLatestArsenalStandings();
    if (!latest) {
      return res.status(404).json({ error: 'No arsenal standings found' });
    }
    res.json(latest);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = arsenalStandingsHandler; 