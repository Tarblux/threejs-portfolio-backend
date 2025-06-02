const { getGitRepoByName } = require('../services/gitReposService');

module.exports = async function gitReposHandler(req, res) {
  try {
    const repo = req.query.repo || req.body.repo;
    if (!repo) {
      return res.status(400).json({ error: 'Repository name is required' });
    }
    const data = await getGitRepoByName(repo);
    if (!data) {
      return res.status(404).json({ error: 'Repository not found' });
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}; 