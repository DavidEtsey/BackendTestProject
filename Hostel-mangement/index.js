const express = require('express');
const app = express();
const Router=require('./src/routes/authRouter.js');

const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

app.use('/api/user',Router)

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
