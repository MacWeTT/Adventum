import React from "react";
import adventumlogo from "../Assets/logo.png";
//Icons
import { BsInstagram, BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className=" bg-tertiary text-secondary">
      <div className="adventumlogo flex justify-center items-center pt-6">
          <img src={adventumlogo} alt="Adventum Logo" className="w-12 "/>

      </div>
      <div className="text-center p-6 md:px-24">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi </p>
      </div>
      <div className="flex justify-center items-center gap-6">
            <div >
              <p className="">Aarhaan Khan</p>
              <p>+91 xxxxxxxx</p>
            </div>
            <div>
              <p className="">Aarhaan Khan</p>
              <p>+91 xxxxxxxx</p>
            </div>
      </div>
      
        
      </footer>


      <footer className="bg-tertiary">
        <div className="text-secondary text-center py-5 flex  flex-col px-10 md:justify-between justify-center">
          
          <span className="social-icons flex justify-center ">
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
          <p>©ACM Copyright 2023.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
