const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

const RATINGS_API_URL = process.env.RATINGS_API_URL;

async function getRatingChange(time_control) {
  const now = new Date();
  const ninetyDaysAgo = new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000);

  // Find the most recent game before or at the start of the window
  const startGame = await prisma.chess_games.findFirst({
    where: {
      time_control: time_control,
      date: { lte: ninetyDaysAgo }
    },
    orderBy: { date: 'desc' }
  });

  // Find the most recent game up to now (latest game)
  const endGame = await prisma.chess_games.findFirst({
    where: {
      time_control: time_control,
      date: { lte: now }
    },
    orderBy: { date: 'desc' }
  });

  if (!startGame || !endGame) return 0;

  return endGame.my_rating - startGame.my_rating;
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