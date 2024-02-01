import React, { useRef } from "react";
// import CountDownTimerWhite from "../../../components/countdown/CountDownWhite";
import CountDownTimer from "../../../components/countdown/CountDownTimer";

const Section2 = () => {
    const timerStyle = "bg-white text-black"

    const section2Ref = useRef(null); 
  return (
    <div ref={section2Ref} style={{ backgroundColor: "#2F40D5" }} className="" id="about">
      <div className="w-11/12 mx-auto py-8 lg:py-14 grid frid-cols-1 lg:grid-cols-2 items-stretch xl:items-center lg:gap-14 xl:gap-10">
        <div className="w-full hidden lg:block position-relative  lg:mt-10 xl:mt-0" >
            <div className="flex justify-start" >
            <img style={{ position:"relative", bottom: "-45px", maxWidth:"70%"}} className="w-3/5" src="https://res.cloudinary.com/doejcrfso/image/upload/v1706611829/webinar-project/people-practicing-social-integration-workspace_1_2_t9vveq.png" alt="" />
            </div>
            <div  className="flex justify-center">
                <img  style={{ position: "relative", left: "50px", maxWidth: "85%"}} className="object-cover"  src="https://res.cloudinary.com/doejcrfso/image/upload/v1706611829/webinar-project/Vector_1_1_guni1q.png" alt="" />
            </div>
        </div>
        <div className="text-white text-center lg:text-left lg:py-10">
          <h1 className="leading-10 xl:leading-[60.24px] text-w-full xl:w-[90%] text-3xl xl:text-[50px] font-bold py-2 lg:py-2  ">My Academy Launch Blueprint Revealed</h1>
          <div className="flex flex-col gap-1">
          <span className="grid grid-cols-1 gap-3"> 
         <p  className=" w-full leading-[40px] lg:text-[18px] xl:text-[24px]  " >Are you a skilled professional that wants to make more income? Do you run an academy but you are still experiencing low income? Are you a business enthusiast that wants to make at least N5 Million Naira monthly? </p>
         <p  className=" w-full leading-[40px] lg:text-[18px] xl:text-[24px]  "> This is where I show you how I make my exact strategy: The Ultimate Academy Launch Blueprint webinar</p>
         
         <span>
          <p className="leading-8 lg:text-[18px] xl:text-[24px] ">Date: Wednesday, February 15, 2024  </p>
          <p className="leading-8 lg:text-[18px] xl:text-[24px] ">Time: 1:00 PM - 8:30 PM (GMT)</p>
          <p className="leading-8 lg:text-[18px] xl:text-[24px] ">Venue: Virtual Meeting</p>
          </span>
         </span>
      
          </div>
          <CountDownTimer timerStyle={timerStyle}/>
        
        </div>
      </div>
    </div>
  );
};

export default Section2;
