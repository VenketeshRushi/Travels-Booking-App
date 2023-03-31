import connectDB from "../../../middleware/connectDB";
import User from "../../../models/user.model";
import { cookies } from "next/headers";
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// }

export async function GET(request) {
  return new Response("Hello, login!");
}

export async function POST(request) {
  await connectDB();
  let data = await request.json();
  console.log(data);
  try {
    let user = await User.findOne({ email: data.email });
    const cookieStore = cookies();
    if (user) {
      return new Response("user already exists");
    } else {
      let createuser = await User.create(data);
      console.log("createuser", createuser);
      let token = "12345";
      return new Response("Hello, Next.js!", {
        status: 200,
        headers: { "Set-Cookie": `token=${token}` },
      });

      // return Response.json({ createuser: createuser });
    }
  } catch (error) {
    return new Error(error.message);
  }
}
