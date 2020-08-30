const express = require('express');
const path = require('path');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

app.use(
  express.json({
    extended: false,
  })
);
app.use(cors)

connectDB();

const PORT = process.env.PORT || 8000;

app.use('api/admin', require('./routes/api/admin_routes'))
app.use('api/user', require('./routes/api/user_routes'))

app.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
