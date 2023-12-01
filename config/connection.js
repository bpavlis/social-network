const mongoose = require("mongoose");

//change bucket-list in future projects
mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/social-network", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
