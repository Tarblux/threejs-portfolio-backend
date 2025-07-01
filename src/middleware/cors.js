const cors = require('cors');

const allowedOrigins = [
  'http://localhost:6006',  
  'http://localhost:5173',  
  'https://www.tariqwill.com', 
  'https://tariqwill.com'
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'));
    }
  },
};

module.exports = cors(corsOptions); 