import { Schema, model } from "mongoose";

const BusSchema = new Schema({
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

export default model("bus", BusSchema);
