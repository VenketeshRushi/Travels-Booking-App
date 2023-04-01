import mongoose from "mongoose";

const busSchema = new mongoose.Schema({
  companyname: String,
  from: String,
  to: String,
  price: Number,
  email: String,
  phone: Number,
  aminites: Array,
  rating: Number,
  arrival: String,
  departure: String,
  seats: Array,
});

export default mongoose.models.bus || mongoose.model("bus", busSchema);
