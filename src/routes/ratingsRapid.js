const express = require('express');
const router = express.Router();
const ratingsRapidHandler = require('../handlers/ratingsRapidHandler');

router.get('/', ratingsRapidHandler);

module.exports = router; 