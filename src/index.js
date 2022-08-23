require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

const config = require('./config/index');
const dbConnection = require('./database/config');
const routerApi = require('./routes');

app.use(cors());
app.use(express.json());

dbConnection();

routerApi(app);

app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});
