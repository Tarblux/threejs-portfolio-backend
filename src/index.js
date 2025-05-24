require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');
const healthRoute = require('./routes/health');
const recentGamesRoute = require('./routes/recentGames');
const myRatingsRoute = require('./routes/myRatings');
const lastOnlineRoute = require('./routes/lastOnline');
const corsMiddleware = require('./middleware/cors');
const app = express();
const PORT = process.env.PORT || 3000;



// Database connection configuration
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false 
  }
});

// Test database connection
pool.connect((err, client, release) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Successfully connected to the database');
    release();
  }
});

app.use(corsMiddleware);

// Health route
app.use('/health', healthRoute(pool));

app.use('/recent-games', recentGamesRoute);

app.use('/my-ratings', myRatingsRoute);

app.use('/last-online', lastOnlineRoute);

app.get('/', (req, res) => {
  res.send('Hello from the other siiiiiidee!');
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});


