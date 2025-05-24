const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

const RATINGS_API_URL = process.env.RATINGS_API_URL;

async function getRatingChange(time_control) {
  const now = new Date();
  const threeMonthsAgo = new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000);
  // Get games in the last 90 days for the given time control
  const games = await prisma.chess_games.findMany({
    where: {
      time_control: time_control,
      date: { gte: threeMonthsAgo }
    },
    orderBy: { date: 'asc' }
  });
  if (games.length === 0) return 0;
  // Rating change = last - first
  return games[games.length - 1].my_rating - games[0].my_rating;
}

async function getMyRatings() {
  const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
  const response = await fetch(RATINGS_API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch ratings data');
  }
  const ratings = await response.json();

  // Get rating changes for bullet, blitz, rapid
  const [bulletChange, blitzChange, rapidChange] = await Promise.all([
    getRatingChange('bullet'),
    getRatingChange('blitz'),
    getRatingChange('rapid')
  ]);

  return {
    ...ratings,
    rating_change_90d: {
      bullet: bulletChange,
      blitz: blitzChange,
      rapid: rapidChange
    }
  };
}

module.exports = { getMyRatings }; 