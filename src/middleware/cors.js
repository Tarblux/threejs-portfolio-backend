const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:6006',
};

module.exports = cors(corsOptions); 