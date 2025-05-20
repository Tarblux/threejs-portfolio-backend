const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from the other kweku!');
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});


