// import { useEffect, useState } from "react";

// const CountDownTimer = ({timerStyle, heading}) => {

//   const [seconds, setSeconds] = useState(0);
//     const [minutes, setMinutes] = useState(0);
//     const [hours, setHours] = useState(0);
//     const [days, setDays] = useState(0);
  
//     const getCurrentATime = () => {
//       const deadline = "10:52 PM,February, 21, 2024";
  
//       const date = Date.parse(deadline) - Date.now();
  
//       setSeconds(Math.floor((date / 1000) % 60));
  
//       setMinutes(Math.floor((date / (1000 * 60)) % 60));
  
//       setHours(Math.floor((date / (1000 * 60 * 60)) % 12));
  
//       setDays(Math.floor(date / (1000 * 60 * 60 * 24)));
  
//       if (date <= 0) {
//         // console.log("Countdown completed");
//         setSeconds(0)
//         setMinutes(0)
//         setHours(0)
//         setDays(0)
//       }
  
  
//     }
//     useEffect(() => {
//       setInterval(getCurrentATime, 1000);
      
//     }, []);

    
  
//   return (
    
//   )
// }

// export default CountDownTimer

// new timer 

import  { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const CountDownTimer = ({ timerStyle, heading }) => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);

  const getCurrentATime = () => {
    const deadline = "10:52 PM,February, 21, 2024";
    const date = Date.parse(deadline) - Date.now();

    setSeconds(Math.floor((date / 1000) % 60));
    setMinutes(Math.floor((date / (1000 * 60)) % 60));
    setHours(Math.floor((date / (1000 * 60 * 60)) % 12));
    setDays(Math.floor(date / (1000 * 60 * 60 * 24)));

    if (date <= 0) {
      setSeconds(0);
      setMinutes(0);
      setHours(0);
      setDays(0);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(getCurrentATime, 1000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="py-3  ">
    <h2 className={` ${heading} font-bold text-lg py-1 text-center lg:text-start`} >Webinar starts in:</h2>
   <div className="flex flex-wrap justify-center  xl:justify-start items-center  gap-4 lg:gap-5">
     <div className="flex flex-col content-center items-center">
       <p className={` ${timerStyle} w-[60px] h-[60px] lg:w-[89px] lg:h-[81px] text-center border-2 rounded-md pt-2 lg:py-5 px-1 lg:px-6 text-[32px] font-semibold`}>
         {days.toString().length == 2 ? `${days}` : `${days}`}
       </p>{" "}
       <span className="py-3 text-base md:text-xl">Days </span>
     </div>
     <div className="flex flex-col content-center items-center">
       <p className={` ${timerStyle} w-[60px] h-[60px] lg:w-[89px] lg:h-[81px] text-center border-2 rounded-md pt-2 lg:py-5 px-1 lg:px-6 text-[32px] font-semibold`}>
         {hours.toString().length == 2 ? `${hours} `: `${hours}`}
       </p>
       <span className="py-3 text-base md:text-xl">Hours </span>
     </div>
     <div className="flex flex-col content-center items-center">
       <p className={` ${timerStyle} w-[60px] h-[60px] lg:w-[89px] lg:h-[81px] text-center border-2 rounded-md pt-2 lg:py-5 px-1 lg:px-6 text-[32px] font-semibold`}>
         {minutes.toString().length == 2 ? `${minutes}` : `${minutes}`}
       </p>
       <span className="py-3 text-base md:text-xl ">Minutes </span>
     </div>
     <div className="flex flex-col content-center items-center">
       <p  className={` ${timerStyle}  w-[60px] h-[60px] lg:w-[89px] lg:h-[81px] text-center border-2 rounded-md pt-2 lg:py-5 px-1 lg:px-6 text-[32px] font-semibold`}>
         {seconds.toString().length == 2 ? `${seconds}` : `${seconds}`}
       </p>
       <span className="py-3 text-base md:text-xl">Seconds </span>
     </div>
   </div>
 </div>
  );
};

export default CountDownTimer;