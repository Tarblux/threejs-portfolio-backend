const express = require('express');
const router = express.Router();
const gitContributionsHandler = require('../handlers/gitContributionsHandler');

router.get('/', gitContributionsHandler);
router.post('/repo-stats', require('../handlers/gitRepoStatsHandler'));

module.exports = router; 