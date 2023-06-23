import React, { useState } from "react";
import acm from "../Assets/acm.png";
import logo from "../Assets/logo.png"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-primary border-[1px] border-secondary  rounded-md m-5">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex">
              <a href="/">
                <img className="h-8 w-full" src={logo} alt="Logo" />
              </a>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="ml-4 flex justify-center items-center space-x-4">
              <a
                href="/"
                className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                HOME
              </a>
              <a
                href="/events"
                className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                EVENTS
              </a>
              <a
                href="/teams"
                className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                TEAMS
              </a>
              <a
                href="/sponsors"
                className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                SPONSORS
              </a>
            </div>
          </div>
          <div className="object-right ">
              <a href="/">
                <img className=" pr-8 h-8 w-full hidden sm:block" src={acm} alt="acm" />
              </a>
            </div>

          <div className="-mr-2 flex lg:hidden">
            
            <button
              onClick={toggleNavbar}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
          {/* <div className="hidden lg:block">
            <div className="ml-4 flex items-center space-x-4">
              <a
                href="/"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Sign In
              </a>
              <a
                href="/"
                className="text-secondary bg-primary hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Create Free Account
              </a>
              <a href="/" className="w-10 h-10">
                <img src={Google} alt="Google" />
              </a>
            </div>
          </div> */}
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/"
              className=" text-white hover:bg-gray-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              HOME
            </a>
            <a
              href="/events"
              className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              EVENTS
            </a>
            <a
              href="/sponsors"
              className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              SPONSORS
            </a>
            <a
              href="/teams"
              className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              TEAMS
            </a>
            <a
              href="/"
              className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Sign In
            </a>
            <a
              href="/"
              className="text-secondary bg-primary hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Create Free Account
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
