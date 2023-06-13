const express = require('express');
const cors = require('cors');
const router = require('./routes/routes.js');
const DBConnection = require('./database/db.js');
require('dotenv').config();
const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors());
app.use('/', router);

DBConnection();
app.listen(PORT, () => {
  console.log(`Server is Running on ${PORT}`);
});
