const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || "mongodb+srv://josepuente20:jose2324@cluster0.ojhqgkr.mongodb.net",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
