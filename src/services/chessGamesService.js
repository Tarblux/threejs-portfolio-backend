const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

async function getRecentGames() {
  return await prisma.chess_games.findMany({
    orderBy: { id:'desc' },
    take: 5
  });
}

module.exports = { getRecentGames }; 