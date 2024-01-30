import React from "react";
import CountDownTimer from "../../../components/countdown/CountDownTimer";
import top from '../../../assets/top.png';
import bottom from '../../../assets/bottom.png';
import sectionimg from '../../../assets/section2img.png'

const Section2 = () => {
  return (
    <div className="bg-blue-700 w-full pt-10 pb-7">
      <div className="w-full flex  justify-between gap-12 px-32">
      <div className="w-full flex flex-col">
        <img src={sectionimg} alt="" className="" />
      </div>
      <div className="flex justify-center items-center h-full">
      <div className="text-white flex justify-center h-full flex-col gap-6">
        <h2 className="font-bold text-white text-5xl">My Academy Launch Blueprint Revealed</h2>
        <p className="text-white text-xl">
          Are you a skilled professional that wants to make more income? Do you
          run an academy but you are still experiencing low income? Are you a
          business enthusiast that wants to make at least N5 Million Naira
          monthly?
        </p>

        <p className="text-white text-xl"> This is where I show you how I make my exact strategy: The
          Ultimate Academy Launch Blueprint webinar</p>
        <div className=" text-xl leading-10">
        <p><span className="font-bold">Date:</span> Wednesday, February 15, 2024</p>
        <p><span className="font-bold">Time:</span> 1:00 PM - 8:30 PM (GMT)</p>
        <p><span className="font-bold">Venue:</span> Virtual Meeting</p>
        </div>

        <div className="count text-red-700">
          <CountDownTimer />
        </div>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Section2;
