import Link from "next/link";

export default function Login() {
  return <>
    <div className="lg:flex items-center justify-center ">
      <div className=" mt-10 lg:w-1/2 xl:max-w-screen-sm bg-white pb-5 rounded-lg shadow">
        <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-3 xl:px-24 xl:max-w-2xl">
          <h2
            className="text-center text-4xl text-gray-900 font-display font-semibold lg:text-left xl:text-5xl
              xl:text-bold"
          >
            Login
          </h2>
          <div className="mt-12">
            <form>
              <div>
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Email Address
                </div>
                <input
                  className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500 placeholder:pl-2 pl-2"
                  type="email"
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <div className="text-sm font-bold text-gray-700 tracking-wide">
                    Password
                  </div>
                  <div>
                    <Link
                      href="/forget"
                      className="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800
                                  cursor-pointer"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                </div>
                <input
                  className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500 placeholder:pl-2 pl-2"
                  type="password"
                  placeholder="Enter Your Password"
                />
              </div>
              <div className="mt-10">
                <button
                  className="bg-red-600 inline-block p-4 font-bold text-md uppercase leading-tight text-white shadow-md transition duration-150 ease-linear hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg tracking-wide w-full rounded-full"
                >
                  Login
                </button>
              </div>
            </form>
            <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
              Don't have an account ?{" "}
              <Link href="/signup" className="cursor-pointer text-indigo-600  hover:text-red-800">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>;
}
