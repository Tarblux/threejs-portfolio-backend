const express = require('express');
const router = express.Router();
const lastOnlineHandler = require('../handlers/lastOnlineHandler');

router.get('/', lastOnlineHandler);

module.exports = router; 