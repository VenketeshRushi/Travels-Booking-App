import mongoose from "mongoose";

const citySchema = new mongoose.Schema({
  name: String,
  state: String,
});

let cityModel = mongoose.models.city || mongoose.model("city", citySchema);

export default cityModel;

// import mongoose from "mongoose";

// const citySchema = new mongoose.Schema({
//   name: String,
//   state: String,
// });

// let cityModel;
// try {
//   // Try to retrieve the existing model if it already exists
//   cityModel = mongoose.model("city");
//   console.log("hi");
// } catch (error) {
//   // If the model doesn't exist, create it
//   console.log(error);
//   cityModel = mongoose.model("city", citySchema);
//   console.log("bye");
// }

// export default cityModel;
