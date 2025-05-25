const express = require('express');
const router = express.Router();
const gitContributionsHandler = require('../handlers/gitContributionsHandler');

router.get('/', gitContributionsHandler);

module.exports = router; 