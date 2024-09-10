const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    mongoose.connect(
      'mongodb: //127.0.0.1:27017/Inventory',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log('MongoDB Connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;