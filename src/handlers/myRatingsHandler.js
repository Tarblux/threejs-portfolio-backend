const { getMyRatings } = require('../services/myRatingsService');

async function myRatingsHandler(req, res) {
  try {
    const ratings = await getMyRatings();
    res.json(ratings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = myRatingsHandler; 