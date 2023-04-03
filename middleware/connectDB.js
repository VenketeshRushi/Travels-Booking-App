import mongoose from "mongoose";

let url = "mongodb://127.0.0.1:27017/newbus";
const connectDB = async () => {
  return mongoose.connect(url, { useNewUrlParser: true });
};

export default connectDB;
