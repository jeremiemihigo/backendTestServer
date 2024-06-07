const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://bboxx:XkpowCPp098pdicz@cluster0.oi8mi8c.mongodb.net/Tracker",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  console.log("MongoDB connect");
};

module.exports = connectDB;
