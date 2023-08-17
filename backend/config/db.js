const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGOURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDb Connected");
  } catch (err) {
    console.log(`Error occured : ${err.message}`);
    process.exit(1);
  }
};
module.exports = connectDb;
