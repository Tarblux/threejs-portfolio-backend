const express = require('express');
const router = express.Router();
const myRatingsHandler = require('../handlers/myRatingsHandler');

router.get('/', myRatingsHandler);

module.exports = router; 