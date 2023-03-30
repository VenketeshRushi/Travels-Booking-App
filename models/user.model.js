import mongoose from "mongoose";


const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ["male", "femal"],
      default: "male",
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.models.user || mongoose.model("user", userSchema);
