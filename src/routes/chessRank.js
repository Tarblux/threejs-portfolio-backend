const express = require('express');
const router = express.Router();
const chessRankHandler = require('../handlers/chessRankHandler');

router.get('/', chessRankHandler);

module.exports = router; 