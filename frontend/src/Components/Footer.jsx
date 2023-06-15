import React from "react";

//Icons
import { BsInstagram, BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-secondary text-primary px-10 border-b-2 border-primary">
        <div className="comapny p-5">
          <h3 className="text-2xl font-bold">Company</h3>
          <ul className="mt-5">
            <li className="my-3">
              <a href="/">About</a>
            </li>
            <li className="my-3">
              <a href="/">Features</a>
            </li>
            <li className="my-3">
              <a href="/">Works</a>
            </li>
            <li className="my-3">
              <a href="/">Careers</a>
            </li>
          </ul>
        </div>
        <div className="help p-5">
          <h3 className="text-2xl font-bold">Help</h3>
          <ul className="mt-5">
            <li className="my-3">
              <a href="/">Customer Support</a>
            </li>
            <li className="my-3">
              <a href="/">Delivery Details</a>
            </li>
            <li className="my-3">
              <a href="/">Terms & Conditions</a>
            </li>
            <li className="my-3">
              <a href="/">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="resources p-5">
          <h3 className="text-2xl font-bold">Resources</h3>
          <ul className="mt-5">
            <li className="my-3">
              <a href="/">Free E-Books</a>
            </li>
            <li className="my-3">
              <a href="/">Development Tutorial</a>
            </li>
            <li className="my-3">
              <a href="/">How to-Blog</a>
            </li>
            <li className="my-3">
              <a href="/">Youtube Playlist</a>
            </li>
          </ul>
        </div>
        <div className="app p-5">
          <h3 className="text-2xl font-bold">Install App</h3>
        </div>
      </footer>
      <footer className="bg-secondary">
        <div className="text-primary text-center py-5 flex md:flex-row flex-col px-10 md:justify-between justify-center">
          <p>© Copyright 2023.</p>
          <span className="social-icons flex justify-center mt-2">
            <a href="/" className="p-2 text-2xl">
              <BsInstagram />
            </a>
            <a href="/" className="p-2 text-2xl">
              <BsFacebook />
            </a>
            <a href="/" className="p-2 text-2xl">
              <BsGithub />
            </a>
            <a href="/" className="p-2 text-2xl">
              <BsLinkedin />
            </a>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
