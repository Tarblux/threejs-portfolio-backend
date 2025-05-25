const { getLatestGitContribution } = require('../services/gitContributionsService');

async function gitContributionsHandler(req, res) {
  try {
    const latest = await getLatestGitContribution();
    if (!latest) {
      return res.status(404).json({ error: 'No git contributions found' });
    }
    res.json(latest);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = gitContributionsHandler; 