const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://gonumaneesh:gonumaneesh@google-docs.hjpu2ic.mongodb.net/?retryWrites=true&w=majority&appName=google-docs', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected');
  } catch (err) {    
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
