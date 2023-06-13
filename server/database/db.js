const mongoose = require('mongoose');
require('dotenv').config();

const DBConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
    console.log('Database Conected Successfully');
  } catch (error) {
    console.error('Error while connection with the database ', error.message);
  }
};

module.exports = DBConnection;
