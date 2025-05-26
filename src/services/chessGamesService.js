const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

async function getRecentGames() {
  return await prisma.chess_games.findMany({
    orderBy: { id:'desc' },
    take: 5
  });
}

/**
 * Fetch ratings for a given time control, filtered by period or date range.
 * @param {string} timeControl - 'rapid', 'blitz', or 'bullet'
 * @param {object} options - { period, startDate, endDate }
 * @returns {Promise<Array>} - Array of chess_games objects
 */
async function getRatingsByTimeControl(timeControl, options = {}) {
  const { period, startDate, endDate } = options;
  let dateFilter = {};
  const now = new Date();

  if (startDate && endDate) {
    dateFilter = {
      gte: new Date(startDate),
      lte: new Date(endDate)
    };
  } else if (period === 'all') {
    // No date filter
    dateFilter = undefined;
  } else {
    // Default or 'lastYear'
    const lastYear = new Date(now);
    lastYear.setFullYear(now.getFullYear() - 1);
    dateFilter = {
      gte: lastYear,
      lte: now
    };
  }

  const where = {
    time_control: timeControl
  };
  if (dateFilter) {
    where.date = dateFilter;
  }

  // Fetch all relevant games, including game_id
  const allGames = await prisma.chess_games.findMany({
    where,
    orderBy: [
      { date: 'asc' },
      { game_id: 'asc' }
    ],
    select: {
      date: true,
      my_rating: true,
      game_id: true
    }
  });

  // Keep only the last game (highest game_id) for each date
  const lastRatingsByDate = {};
  for (const game of allGames) {
    // Use only the date part (YYYY-MM-DD) as key
    const dateKey = game.date instanceof Date ? game.date.toISOString().split('T')[0] : game.date.split('T')[0];
    if (!lastRatingsByDate[dateKey] || game.game_id > lastRatingsByDate[dateKey].game_id) {
      lastRatingsByDate[dateKey] = game;
    }
  }

  // Return as array, sorted by date
  return Object.values(lastRatingsByDate)
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .map(({ date, my_rating }) => ({ date, my_rating }));
}

module.exports = { getRecentGames, getRatingsByTimeControl }; 