const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT;
const { db } = require('./db/mongo');
const { readdirSync } = require('fs');

const app = express();

// middlewares
app.use(cors());
app.use(bodyParser.json());

// routes
readdirSync('./routes').map((route) => {
  app.use('/api/v1', require(`./routes/${route}`));
});

// error middleware
app.use(require('./middlewares/error-middleware'));

app.listen(PORT, () => {
  db();
  console.log(`Listening on port: ${PORT}...`);
});
