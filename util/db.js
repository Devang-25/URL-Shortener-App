const moongose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env.test" });

const connectDB = async () => {
  try {
    moongose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Connected to database");
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = connectDB;
