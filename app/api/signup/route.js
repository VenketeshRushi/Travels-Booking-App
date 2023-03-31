import connectDB from "../../../middleware/connectDB";
import User from "../../../models/user.model";
// import { cookies } from "next/headers";
let bcrypt = require("bcryptjs");

export async function GET(request) {
  return new Response("Hello, login!");
}

// export async function POST(request) {
//   await connectDB();
//   let data = await request.json();
//   console.log(data);
//   try {
//     let user = await User.findOne({ email: data.email });
//     if (user) {
//       return new Response({
//         status: "Failed",
//         message: "Please try with different email",
//       });
//     } else {
//       var salt = bcrypt.genSaltSync(10);
//       var hash = bcrypt.hashSync(data.password, salt);
//       let info = {
//         email: data.email,
//         password: hash,
//         gender: data.gender,
//       };
//       let createuser = await User.create(info);
//       console.log("createuser", createuser);
//       return new Response("Signup Successful", {
//         status: 200,
//       });
//     }
//   } catch (error) {
//     return new Response(
//       JSON.stringify({
//         status: "error",
//         message: error.message,
//       }),
//       { status: 500, headers: { "Content-Type": "application/json" } }
//     );
//   }
// }

export async function POST(request) {
  await connectDB();

  const { email, password, gender } = await request.json();

  if (!email || !password || !gender) {
    return new Response(
      JSON.stringify({
        status: "error",
        message: "Please provide all required fields",
      }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return new Response({
        status: "error",
        message: "Please try with a different email",
      });
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const info = { email, password: hash, gender };

    const createdUser = await User.create(info);
    console.log(createdUser);
    
   // return Response.redirect('/login', 303);
    return new Response(
      JSON.stringify({
        status: "success",
        message: "Signup Successful",
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        status: "error",
        message: error.message,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
