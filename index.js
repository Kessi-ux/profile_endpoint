const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(cors()); 

const PORT = process.env.PORT || 3000;

app.get('/me', async (req, res) => {
  try {
    // Fetch cat fact from Cat Facts API
    const response = await axios.get('https://catfact.ninja/fact', {
      timeout: 5000, // 5 seconds timeout
    });

    const catFact = response.data.fact;

    res.status(200).json({
      status: 'success',
      user: {
        email: process.env.EMAIL,
        name: process.env.NAME,
        stack: process.env.STACK,
      },
      timestamp: new Date().toISOString(),
      fact: catFact,
    });
  } catch (error) {
    console.error('Cat Facts API Error:', error.message);

    res.status(200).json({
      status: 'success',
      user: {
        email: process.env.EMAIL,
        name: process.env.NAME,
        stack: process.env.STACK,
      },
      timestamp: new Date().toISOString(),
      fact: 'Could not fetch a cat fact at the moment.',
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/me`);
});
