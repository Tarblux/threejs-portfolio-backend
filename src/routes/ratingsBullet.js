const express = require('express');
const router = express.Router();
const ratingsBulletHandler = require('../handlers/ratingsBulletHandler');

router.get('/', ratingsBulletHandler);

module.exports = router; 