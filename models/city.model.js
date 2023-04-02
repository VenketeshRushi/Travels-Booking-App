import { Schema, model } from "mongoose";

const citySchema = new Schema({
  name: String,
  state: String,
});

export default model("City", citySchema);
