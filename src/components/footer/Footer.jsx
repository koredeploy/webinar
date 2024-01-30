import React from "react";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-black py-6">
      <div className=" flex justify-between md:flex-row flex-col  gap-3 flex-wrap w-full py-7 lg:px-32 px-3">
      <div className=" lg:w-80 w-72 flex flex-col gap-1 items-start">
        <img src={logo} alt="" />
        <p className="text-gray-500 leading-6 py-7">
          Join Dr. Emily Johnson for an Exclusive Session on [Key Topic]. Don't
          miss this opportunity to gain actionable knowledge,
        </p>
        <button className="bg-white text-black p-3 font-semibold ">Register Now</button>
      </div>

      <div>
        <p className="font-semibold text-white leading-7">Quick Links</p>
        <ul>
          <li className="text-gray-500 leading-10">Home</li>
          <li className="text-gray-500 leading-10">About Webinar</li>
          <li className="text-gray-500 leading-10">The Speaker</li>
          <li className="text-gray-500 leading-10">Watch the Video</li>
        </ul>
      </div>
      <div>
        <p className="font-semibold text-white">Contact Us</p>
        <p className="text-gray-500 leading-10">info@webinar.com</p>
        <p className="text-gray-500 leading-10">+234 8123890117</p>
        <p className="text-gray-500 leading-10">+234 9045012569</p>
      </div>
      </div>

      <hr className="bg bg-gray-500"/>

      <p className="text-gray-500 text-center text-xs py-5">Copyright 2024, All rights reserved.</p>

    </div>
  );
};

export default Footer;
