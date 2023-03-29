"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const hide = () => setIsOpen(false);
  const show = () => setIsOpen(true);
  return (
    <>
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
                onClick={toggle}
              >
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
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0">
                <Link href={"/"}>
                  <Image
                    src="/./logo.png"
                    width={55}
                    height={50}
                    priority
                    alt="Your Company"
                  />
                </Link>
              </div>
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
        {isOpen ? (
          <div className="relative sm:hidden" id="mobile-menu">
            <div className="absolute left-0 top-0 z-10 w-full h-max bg-gray-900 space-y-1 hover:text-white px-2 pt-2 pb-3">
              <Link
                href="/"
                className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
                aria-current="page"
                onClick={toggle}
                onBlur={hide}
                onFocus={show}
              >
                Home
              </Link>

              <Link
                href="/ticket"
                className="text-white hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                onClick={toggle}
                onBlur={hide}
                onFocus={show}
              >
                Tickets
              </Link>
            </div>
          </div>
        ) : (
          ""
        )}
      </nav>
    </>
  );
}
