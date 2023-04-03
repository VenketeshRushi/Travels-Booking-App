import mongoose from "mongoose";

const citySchema = new mongoose.Schema({
  name: String,
  state: String,
});

let cityModel = mongoose.models.city || mongoose.model("city", citySchema);

export default cityModel;
