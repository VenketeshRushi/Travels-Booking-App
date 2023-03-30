import connectDB from "../../../middleware/connectDB";
import userModel from "../../../models/user.model";
// import User from "../../../models/user.model";

export async function GET(request) {
  return new Response("Hello, login!");
}

// export async function POST(request) {
//   await connectDB();
//   console.log("req", request);
//   try {
//     let user = await userModel.findOne({ email: request.body.email });
//     if (user) {
//       return new Response("user already exists");
//     } else {
//       let createuser = await userModel.create(request.body);
//       console.log("createuser", createuser);
//       return new Response("user Created successfully");
//     }
//   } catch (error) {
//     return new Response(error.message);
//   }
// }


