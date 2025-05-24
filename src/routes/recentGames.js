const express = require('express');
const router = express.Router();
const recentGamesHandler = require('../handlers/recentGamesHandler');

router.get('/', recentGamesHandler);

module.exports = router; 