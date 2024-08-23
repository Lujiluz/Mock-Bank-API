const mongoose = require('mongoose');
const MONGO_URL = process.env.MONGO_URL;

const db = async () => {
  mongoose.set('strictQuery', false);
  await mongoose
    .connect(MONGO_URL)
    .then(() => {
      console.log('Database connected...');
    })
    .catch((err) => {
      console.log('Failed to connect to database...', err);
    });
};

module.exports = { db };
