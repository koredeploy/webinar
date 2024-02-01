import React from "react";
import BlueBtn from "../../../components/button/register-btn/BlueBtn";
import CountDownTimer from "../../../components/countdown/CountDownTimer";

const HeroSection = ({setOpen}) => {
    const timerStyle = "bg-black text-white"
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-5 pt-14 lg:pt-24 pb-10 mt-16 w-11/12 mx-auto">
      <div className=" text-center md:text-left flex flex-col items-center lg:items-start ">
        <p className="p-1 px-4 mb-3 bg-black rounded-3xl text-white">UIAB Webinar</p>
        <h1 className="font-bold  text-2xl md:text-[45px] lg:text-[53px] text-center lg:text-start  leading-10 md:leading-[79.52px] ">
          Elevate Your Skills in  an Exclusive Webinar Experience
        </h1>
        <p className=" py-3 leading-8 text-center lg:text-start w-4/5">
        Join me as I share how I built a multi million Naira Academy in Lagos, Nigeria. I am going to personally help one lucky participant earn up to 1 Million Naira monthly in the first year.

        </p>

        <CountDownTimer timerStyle={timerStyle}/>

        <BlueBtn setOpen={setOpen}/>
      </div>
      <div className="flex justify-center lg:justify-end">
        <img className=" object-cover w-full lg:w-11/12" src="https://res.cloudinary.com/doejcrfso/image/upload/v1706530316/webinar-project/Vector_1_zc61tv.png" alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
