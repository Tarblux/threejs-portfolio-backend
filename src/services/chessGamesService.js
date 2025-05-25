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

  return await prisma.chess_games.findMany({
    where,
    orderBy: [
      { date: 'asc' },
      { game_id: 'asc' }
    ],
    select: {
      date: true,
      my_rating: true
    }
  });
}

module.exports = { getRecentGames, getRatingsByTimeControl }; 