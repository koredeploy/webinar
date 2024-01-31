// import React from "react";
// import CountDownTimer from "../../../components/countdown/CountDownTimer";

const HeroSection = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 items-center gap-10 py-10 w-11/12 mx-auto">
      <div className=" text-center md:text-left flex flex-col items-center md:items-start ">
        <h1 className="font-bold  text-2xl md:text-5xl  leading-10 md:leading-[4rem] ">
          Elevate Your Skills in  an Exclusive Webinar Experience
        </h1>
        <p className=" py-3 leading-8">
        Join me as I share how I built a multi million Naira Academy in Lagos, Nigeria. I am going to personally help one lucky participant earn up to 1 Million Naira monthly in the first year.

        </p>

        {/* <BlueBtn/> */}
      </div>
      <div>
        <img src="https://res.cloudinary.com/doejcrfso/image/upload/v1706530316/webinar-project/Vector_1_zc61tv.png" alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
