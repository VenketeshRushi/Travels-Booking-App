"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [show, setshow] = useState(false);
  return (
    <nav className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button--> */}
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setshow(!show)}
            >
              <span className="sr-only">Open main menu</span>
              {/* <!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block" */}
              {/* --> */}
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              {/* <!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          --> */}
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>

              {/* <span classNmae="sr-only">Open main menu</span>
              <div className="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
                <span
                  aria-hidden="true"
                  class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
                  className="{'rotate-45': open,' -translate-y-1.5': !open }"
                ></span>
                <span
                  aria-hidden="true"
                  class="block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out"
                  className="{'opacity-0': open } "
                ></span>
                <span
                  aria-hidden="true"
                  class="block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out"
                  className="{'-rotate-45': open, ' translate-y-1.5': !open}"
                ></span>
              </div> */}
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <Image
                src="/./logo.png"
                width={55}
                height={50}
                priority
                alt="Your Company"
              />
            </div>
            {/* <div className="border-2 border-white flex-shrink-0">
              <Image
                className="block h-55 w-auto m-auto lg:hidden"
                src="/./logo.png"
                alt="redbus"
                width={50}
                height={50}
                priority
              />
              <Image
                className="hidden h-23 w-auto lg:block"
                src="/./logo.png"
                alt="redbus"
                width={70}
                height={60}
                priority
              />
            </div> */}
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                <Link
                  href="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Home
                </Link>

                <Link
                  href="/ticket"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Tickets
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="relative ml-3">
              <div className="flex space-x-4">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                <Link
                  href="/login"
                  className="bg-gray-800 text-white rounded-md px-3 py-2 text-sm font-medium"
                  aria-current="page"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      {show ? (
        <div
          className="relative border-1 border-white  sm:hidden"
          id="mobile-menu"
        >
          <div className="absolute top-0 w-full h-max bg-gray-900 space-y-1 px-2 pt-2 pb-3">
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            <Link
              href="/"
              className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
              aria-current="page"
            >
              Home
            </Link>

            <Link
              href="/ticket"
              className="text-gray-300 text-white hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Tickets
            </Link>
          </div>
        </div>
      ) : (
        ""
      )}
    </nav>
  );
}
