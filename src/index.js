require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

const config = require('./config/index');
const dbConnection = require('./database/config');

app.use(cors());
app.use(express.json());

dbConnection();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});
