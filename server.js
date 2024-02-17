const express = require('express');
const axios = require('axios');

// const app = express();
// const port = 4000; // Choose a port for your server

app.use(express.json());

app.get('/ethereum-price', async (req, res) => {
  try {
    const response = await axios.get(
      'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd'

      
    );

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching Ethereum price:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});