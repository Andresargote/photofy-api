const mongoose = require('mongoose');
const config = require('../config/index');

const dbConnection = async () => {
  try {
    await mongoose.connect(config.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected🎉');
  } catch (error) {
    throw new Error('Error:', error);
  }
};

module.exports = dbConnection;
