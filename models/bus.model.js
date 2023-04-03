import mongoose from "mongoose";

const BusSchema = new mongoose.Schema({
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

let busModel = mongoose.models.bus || mongoose.model("bus", BusSchema);

export default busModel;
