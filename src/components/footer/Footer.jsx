import React from "react";


const Footer = ({setOpen}) => {
    const showModal =()=>{
        setOpen(true)
    }
  return (
    <div style={{maxWidth:"1600px ", margin:"auto"}} className="bg-black py-6">
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-5 lg:gap-2 w-11/12 mx-auto py-7 text-center lg:text-left  ">
      <div className="  flex flex-col gap-1 items-center lg:items-start">
        <img src="https://res.cloudinary.com/doejcrfso/image/upload/v1706697604/webinar-project/Webinar_1_gcx5j2.png" alt="" />
        <p className="text-white text-[18px] leading-8  py-7 w-full md:w-4/6 lg:w-3/5">
          Join Dr. Emily Johnson for an Exclusive Session on [Key Topic]. Don't
          miss this opportunity to gain actionable knowledge,
        </p>
        <button onClick={showModal} className="bg-white text-black p-3 font-semibold hover:text-red-500 transition duration-300 ease-in-out">Register Now</button>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
      <div>
        <p className="font-semibold text-white  leading-7">Quick Links</p>
        <ul>
          <li className="text-white text-[18px] leading-10">Home</li>
          <li className="text-white text-[18px] leading-10">About Webinar</li>
          <li className="text-white text-[18px] leading-10">The Speaker</li>
          <li className="text-white text-[18px] leading-10">Watch the Video</li>
        </ul>
      </div>
      <div>
        <p className="font-semibold text-[18px] text-white">Contact Us</p>
        <p className="text-white  text-[18px] leading-10">info@webinar.com</p>
        <p className="text-white text-[18px] leading-10">+234 8123890117</p>
        <p className="text-white text-[18px leading-10">+234 9045012569</p>
      </div>
      </div>
      </div>

      <hr className="bg bg-gray-500"/>

      <p style={{color: "#7C7C7C"}} className=" text-center text-xs pb-5 pt-10">Copyright 2024, All rights reserved.</p>

    </div>
  );
};

export default Footer;