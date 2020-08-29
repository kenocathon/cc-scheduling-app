const express = require('express');
const path = require('path');
const connectDB = require('./config/db');

const app = express();

app.use(
  express.json({
    extended: false,
  })
);

connectDB();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server has started on port $(PORT)`));
