const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Import API routes
const flightPricesRoutes = require('./routes/flightPrices');

// Use API routes
app.use('/flight-prices', flightPricesRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start the server
app.listen(port, () => {
  console.log(`Flight Price API is running on http://localhost:${port}`);
});
