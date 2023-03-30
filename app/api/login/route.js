import connectDB from "@/middleware/connectDB";
import User from "../../../models/user.model";

const Users = async (req, res) => {
  await connectDB();
  if (req.method === "GET") {
    return userAuth(req, res);
  }
  // if (req.method === "POST") {
  //   return addCartItem(req, res);
  // }
  // if (req.method === "PATCH") {
  //   return orderPlaced(req, res);
  // }
};

async function userAuth(req, res) {
  try {
    let user = await User.find({ email: req.body.email });
  } catch (error) {}
}

// export async function GET(request) {
//   return new Response("Hello, login!");
// }
