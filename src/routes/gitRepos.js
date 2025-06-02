const express = require('express');
const router = express.Router();
const gitReposHandler = require('../handlers/gitReposHandler');

router.get('/', gitReposHandler);

module.exports = router; 