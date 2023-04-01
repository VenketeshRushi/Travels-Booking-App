import mongoose from "mongoose";


const citySchema = new mongoose.Schema(
  {
    name: String,
    state: String,
  },
);

export default mongoose.models.city || mongoose.model("city", citySchema);