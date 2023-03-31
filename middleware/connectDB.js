import mongoose from "mongoose";
mongoose.set("strictQuery", false);
let url = "mongodb://127.0.0.1:27017/newbus";
const connectDB = async () => {
  return mongoose.connect(url);
};

export default connectDB;
