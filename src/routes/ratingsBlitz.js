const express = require('express');
const router = express.Router();
const ratingsBlitzHandler = require('../handlers/ratingsBlitzHandler');

router.get('/', ratingsBlitzHandler);

module.exports = router; 