const express = require('express');
const router = express.Router();
const arsenalStandingsHandler = require('../handlers/arsenalStandingsHandler');

router.get('/', arsenalStandingsHandler);

module.exports = router; 