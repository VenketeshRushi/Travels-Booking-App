import mongoose from 'mongoose';
mongoose.set('strictQuery', false);

const connectDB = async () => {
  return mongoose.connect("mongodb://127.0.0.1:27017/redbus")
};

export default connectDB;