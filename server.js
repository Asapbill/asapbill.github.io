const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory data storage (not persistent, for demo)
let storedData = [];

// Endpoint for data submission
app.post('/submit', (req, res) => {
  const data = req.body;
  storedData.push(data);
  res.json({ message: 'Data received!', data });
});

// Endpoint to view all data
app.get('/view-data', (req, res) => {
  res.json(storedData);
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});