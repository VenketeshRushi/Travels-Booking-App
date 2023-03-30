"use client";
import Link from "next/link";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

export default function Signup() {
  const initial = {
    email: "",
    password: "",
    gender: "",
  };
  const [signupcred, setsignupcred] = useState(initial);

  function hanldeChange(e) {
    setsignupcred({ ...signupcred, [e.target.name]: e.target.value });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      signupcred.email === "" ||
      signupcred.password === "" ||
      signupcred.gender === ""
    ) {
      toast("Toast is good", {
        hideProgressBar: true,
        autoClose: 2000,
        type: "success",
      });
      alert("hi")
    } else {
      try {
        let response = await axios.post("/api/signup", signupcred);
        console.log(response);
        alert("bye")
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <>
      <div className="lg:flex items-center justify-center ">
        <div className=" mt-0 lg:w-1/3 xl:max-w-screen-sm bg-white pb-5 rounded-xl shadow-2xl drop-shadow-2xl">
          <div className="mt-10 px-8 sm:px-24 md:px-48 lg:px-10 lg:mt-3 xl:px-6 xl:max-w-2xl">
            <h2
              className="text-center text-3xl text-gray-800 font-display font-semibold lg:text-left xl:text-5xl
              xl:text-bold"
            >
              Signup
            </h2>
            <div className="mt-12">
              <form onSubmit={handleSubmit}>
                <div>
                  <div className="text-sm font-bold text-gray-700 tracking-wide">
                    Email Address
                  </div>
                  <input
                    className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500 placeholder:pl-2 pl-2"
                    type="email"
                    placeholder="Enter Your Email"
                    name="email"
                    onChange={hanldeChange}
                  />
                </div>
                <div className="mt-8">
                  <div className="text-sm font-bold text-gray-700 tracking-wide">
                    Password
                  </div>
                  <input
                    className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500 placeholder:pl-2 pl-2"
                    type="password"
                    placeholder="Enter Your Password"
                    name="password"
                    onChange={hanldeChange}
                  />
                </div>
                <div className="mt-8">
                  <div className="text-sm font-bold text-gray-700 tracking-wide">
                    Gender
                  </div>
                  <select
                    name={"gender"}
                    onChange={hanldeChange}
                    className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500 placeholder:pl-2 pl-2"
                  >
                    <option>Select Your Gender</option>
                    <option value="male">MALE</option>
                    <option value="female">FEMALE</option>
                  </select>
                </div>
                <div className="mt-10">
                  <button className="bg-red-600 inline-block p-4 font-bold text-md uppercase leading-tight text-white shadow-md transition duration-150 ease-linear hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg tracking-wide w-full rounded-full">
                    Sign Up
                  </button>
                </div>
              </form>
              <div className="mt-3 text-sm font-display font-semibold text-gray-700 text-center">
                Already have an account ?{" "}
                <Link
                  href="/login"
                  className="cursor-pointer text-indigo-600  hover:text-red-800"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={3000} />
    </>
  );
}
