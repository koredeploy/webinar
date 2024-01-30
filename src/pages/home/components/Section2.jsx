import React from "react";
import CountDownTimer from "../../../components/countdown/CountDownTimer";
import top from '../../../assets/top.png';
import bottom from '../../../assets/bottom.png';

const Section2 = () => {
  return (
    <div className="bg-blue-700 w-full">
      <div className="container flex gap-7">
      <div>
        <img src={top} alt="" />
        <img src={bottom} alt="" />
      </div>
      <div>
        <h2>My Academy Launch Blueprint Revealed</h2>
        <p>
          Are you a skilled professional that wants to make more income? Do you
          run an academy but you are still experiencing low income? Are you a
          business enthusiast that wants to make at least N5 Million Naira
          monthly? This is where I show you how I make my exact strategy: The
          Ultimate Academy Launch Blueprint webinar
        </p>

        <p><span>Date:</span> Wednesday, February 15, 2024</p>
        <p><span>Time:</span> 1:00 PM - 8:30 PM (GMT)</p>
        <p><span>Venue:</span> Virtual Meeting</p>

        <div>
          <CountDownTimer />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Section2;
