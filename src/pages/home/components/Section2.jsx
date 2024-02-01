import React from "react";
// import CountDownTimerWhite from "../../../components/countdown/CountDownWhite";
import CountDownTimer from "../../../components/countdown/CountDownTimer";

const Section2 = () => {
    const timerStyle = "bg-white text-black"
  return (
    <div id="aboutme" style={{ backgroundColor: "#2F40D5" }} className="">
      <div className="w-11/12 mx-auto py-16 flex flex-col-reverse lg:flex-row  items-center gap-10">
        <div className="w-full hidden lg:block position-relative " >
            <div className="flex justify-start" >
            <img style={{maxWidth: "55%", position:"relative", bottom: "-40px"}} className="w-3/5" src="https://res.cloudinary.com/doejcrfso/image/upload/v1706611829/webinar-project/people-practicing-social-integration-workspace_1_2_t9vveq.png" alt="" />
            </div>
            <div  className="flex justify-center">
                <img style={{maxWidth: "70%", position: "relative", left: "30px"}} className="object-cover"  src="https://res.cloudinary.com/doejcrfso/image/upload/v1706611829/webinar-project/Vector_1_1_guni1q.png" alt="" />
            </div>
        </div>
        <div className="text-white text-center lg:text-left py-10">
          <h1 className="leading-8 lg:leading-[4rem] text-2xl lg:text-5xl font-bold py-2 lg:py-5  ">My Academy Launch Blueprint Revealed</h1>
          <div className="flex flex-col gap-4 py-3">
          <span> 
         <p  className=" w-full lg:w-9/12 leading-7 " >Are you a skilled professional that wants to make more income? Do you run an academy but you are still experiencing low income? Are you a business enthusiast that wants to make at least N5 Million Naira monthly?</p>
         </span>
         <span>
         <p className=" w-full lg:w-9/12 leading-7 ">
          This is where I show you how I make my exact strategy: The Ultimate Academy Launch Blueprint webinar
          </p>
         </span>
          <span>
          <p className="leading-7">Date: Wednesday, February 15, 2024  </p>
          <p className="leading-7">Time: 1:00 PM - 8:30 PM (GMT)</p>
          <p className="leading-7">Venue: Virtual Meeting</p>
          </span>
          </div>
          <CountDownTimer timerStyle={timerStyle}/>
        
        </div>
      </div>
    </div>
  );
};

export default Section2;
