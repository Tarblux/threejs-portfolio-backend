const { getGitRepoStats } = require('../services/gitRepoStatsService');

module.exports = async function gitRepoStatsHandler(req, res) {
  try {
    const { repo } = req.body;
    if (!repo) {
      return res.status(400).json({ error: 'Repository name is required' });
    }
    const stats = await getGitRepoStats(repo);
    res.json(stats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}; 