const express = require('express');
const router = express.Router();
const healthCheck = require('../handlers/healthHandler');

module.exports = (pool) => {
  router.get('/', (req, res) => healthCheck(req, res, pool));
  return router;
}; 