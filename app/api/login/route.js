import connectDB from "../../../middleware/connectDB";
import User from "../../../models/user.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const HTTP_STATUS = {
  SUCCESS: 200,
  ERROR: 500,
};

const CONTENT_TYPE_HEADER = { "Content-Type": "application/json" };

const createToken = (user) =>
  jwt.sign({ user }, process.env.JWT_ASSESS_KEY, { expiresIn: "60m" });

export async function POST(request) {
  const data = await request.json();
  console.log(data);

  if (!data.email || !data.password) {
    return new Response(
      JSON.stringify({
        status: "error",
        message: "Email and password are required",
      }),
      { status: HTTP_STATUS.ERROR, headers: CONTENT_TYPE_HEADER }
    );
  }

  try {
    await connectDB();

    const user = await User.findOne({ email: data.email });
    console.log(user);

    if (!user) {
      return new Response(
        JSON.stringify({
          status: "error",
          message: "Invalid email",
        }),
        { status: HTTP_STATUS.ERROR, headers: CONTENT_TYPE_HEADER }
      );
    }

    const passwordMatches = await bcrypt.compare(data.password, user.password);

    if (!passwordMatches) {
      return new Response(
        JSON.stringify({
          status: "error",
          message: "Invalid password",
        }),
        { status: HTTP_STATUS.ERROR, headers: CONTENT_TYPE_HEADER }
      );
    }

    const token = createToken(user);
    console.log(token);
    
    const now = new Date();
    const hourLater = new Date(now.getTime() + 60 * 60 * 1000);

    const headers = {
      ...CONTENT_TYPE_HEADER,
      "set-cookie": `token=${token}; path=/; HttpOnly; SameSite=Strict; expires=${hourLater.toUTCString()};`,
    };

    return new Response(
      JSON.stringify({
        status: "success",
        message: "Login successful",
        token,
      }),
      { status: HTTP_STATUS.SUCCESS, headers }
    );
  } catch (error) {
    console.error(error);

    return new Response(
      JSON.stringify({
        status: "error",
        message: "An error occurred while processing the request",
      }),
      { status: HTTP_STATUS.ERROR, headers: CONTENT_TYPE_HEADER }
    );
  }
}
