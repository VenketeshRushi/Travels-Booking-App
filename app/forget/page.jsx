"use client";
import Link from "next/link";
import { useState } from "react";

export default function ForgetPassword() {
  const [openotp, setopenotp] = useState(false);
  return (
    <>
      <div className="container mx-auto ">
        <div className="flex justify-center px-6 my-4 ">
          {/* Row */}
          <div className="w-full xl:w-3/4 lg:w-11/12 flex rounded-xl shadow-2xl drop-shadow-2xl">
            {/* Col */}
            <div
              className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
              style={{
                backgroundImage:
                  'url("https://source.unsplash.com/oWTW-jNGl9I/600x800")',
              }}
            />
            {/* Col */}
            <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
              <div className="px-8 mb-4 text-center">
                <h3 className="pt-4 mb-2 text-gray-900 text-2xl font-semibold">
                  Forgot Your Password?
                </h3>
                <p className="mb-4 text-sm text-gray-700">
                  We get it, stuff happens. Just enter your email address below
                  and we'll send you a link to reset your password!
                </p>
              </div>
              <div className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                {openotp ? (
                  <>
                    <div className="mb-4">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        htmlFor="otp"
                      >
                        OTP
                      </label>
                      <input
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="number"
                        type="number"
                        placeholder="Enter your OTP"
                        max={4}
                      />
                    </div>
                    <div className="mb-6 text-center">
                      <button
                        className="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
                        type="button"
                        onClick={() => setopenotp(false)}
                      >
                        Submit
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="mb-4">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Enter Email Address..."
                      />
                    </div>
                    <div className="mb-6 text-center">
                      <button
                        className="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
                        type="button"
                        onClick={() => setopenotp(true)}
                      >
                        Reset Password
                      </button>
                    </div>
                  </>
                )}
                <hr className="mb-6 border-t" />
                <div className="text-center">
                  <Link
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    href="/signup"
                  >
                    Create an Account!
                  </Link>
                </div>
                <div className="text-center">
                  <Link
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    href="/login"
                  >
                    Already have an account? Login!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
