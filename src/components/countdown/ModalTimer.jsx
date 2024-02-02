import { useCallback } from "react";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const ModalTimer = ({ timerStyle, heading }) => {
  const calculateTimeRemaining = useCallback(() => {
    const deadline = new Date("2024-02-21T22:52:00Z"); // Updated format for better compatibility
    const currentTime = new Date();

    let date = deadline - currentTime;

    const days = Math.floor(date / (1000 * 60 * 60 * 24));
    const hours = Math.floor((date / (1000 * 60 * 60)) % 12);
    const minutes = Math.floor((date / (1000 * 60)) % 60);
    const seconds = Math.floor((date / 1000) % 60);

    return { days, hours, minutes, seconds };
  }, []);

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [calculateTimeRemaining]);
  return (
    <div className="py-3  ">
      <h2
        className={` ${heading} font-bold text-lg py-1 text-center`}
      >
        Webinar starts in:
      </h2>
      <div className="flex flex-wrap justify-center xl:justify-center items-center  gap-4 lg:gap-5">
        <div className="flex flex-col content-center items-center">
          <p
            className={` ${timerStyle} w-[60px] h-[60px] lg:w-[89px] lg:h-[81px] text-center border-2 rounded-md pt-2 lg:py-5 px-1 lg:px-6 text-[32px] font-semibold`}
          >
            {timeRemaining.days}
          </p>{" "}
          <span className="py-3 text-base md:text-xl">Days </span>
        </div>
        <div className="flex flex-col content-center items-center">
          <p
            className={` ${timerStyle} w-[60px] h-[60px] lg:w-[89px] lg:h-[81px] text-center border-2 rounded-md pt-2 lg:py-5 px-1 lg:px-6 text-[32px] font-semibold`}
          >
            {timeRemaining.hours}
          </p>
          <span className="py-3 text-base md:text-xl">Hours </span>
        </div>
        <div className="flex flex-col content-center items-center">
          <p
            className={` ${timerStyle} w-[60px] h-[60px] lg:w-[89px] lg:h-[81px] text-center border-2 rounded-md pt-2 lg:py-5 px-1 lg:px-6 text-[32px] font-semibold`}
          >
            {timeRemaining.minutes}
          </p>
          <span className="py-3 text-base md:text-xl ">Minutes </span>
        </div>
        <div className="flex flex-col content-center items-center">
          <p
            className={` ${timerStyle}  w-[60px] h-[60px] lg:w-[89px] lg:h-[81px] text-center border-2 rounded-md pt-2 lg:py-5 px-1 lg:px-6 text-[32px] font-semibold`}
          >
            {timeRemaining.seconds}
          </p>
          <span className="py-3 text-base md:text-xl">Seconds </span>
        </div>
      </div>
    </div>
  );
};
// import { useEffect, useState } from "react";

// const ModalTimer = ({ timerStyle, heading }) => {
//     const [seconds, setSeconds] = useState(0);
//     const [minutes, setMinutes] = useState(0);
//     const [hours, setHours] = useState(0);
//     const [days, setDays] = useState(0);

//     const getCurrentATime = () => {
//         const deadline = "10:52 PM,February, 21, 2024";

//         const date = Date.parse(deadline) - Date.now();

//         setSeconds(Math.floor((date / 1000) % 60));

//         setMinutes(Math.floor((date / (1000 * 60)) % 60));

//         setHours(Math.floor((date / (1000 * 60 * 60)) % 12));

//         setDays(Math.floor(date / (1000 * 60 * 60 * 24)));

//         if (date <= 0) {
//             // console.log("Countdown completed");
//             setSeconds(0);
//             setMinutes(0);
//             setHours(0);
//             setDays(0);
//         }
//     };
//     useEffect(() => {
//         setInterval(getCurrentATime, 1000);
//     }, []);

//     return (
//         <div className='py-3  '>
//             <h2 className={` ${heading} font-bold text-lg py-3 text-center lg:text-start`}>Webinar starts in:</h2>
//             <div className='flex flex-wrap justify-center lg:justify-start items-center  lg:items-end gap-1 lg:gap-5'>
//                 <div className='flex flex-col content-center items-center'>
//                     <p
//                         className={` ${timerStyle} w-[60px] h-[60px] lg:w-[89px] lg:h-[81px] text-center border-2 rounded-md pt-2 lg:py-5 px-1 lg:px-6 text-[32px] font-semibold`}
//                     >
//                         {days.toString().length == 2 ? `${days}` : `0${days}`}
//                     </p>{" "}
//                     <span className='py-3 text-base md:text-xl'>Days </span>
//                 </div>
//                 <div className='flex flex-col content-center items-center'>
//                     <p
//                         className={` ${timerStyle} w-[60px] h-[60px] lg:w-[89px] lg:h-[81px] text-center border-2 rounded-md pt-2 lg:py-5 px-1 lg:px-6 text-[32px] font-semibold`}
//                     >
//                         {hours.toString().length == 2 ? `${hours} ` : `0${hours}`}
//                     </p>
//                     <span className='py-3 text-base md:text-xl'>Hours </span>
//                 </div>
//                 <div className='flex flex-col content-center items-center'>
//                     <p
//                         className={` ${timerStyle} w-[60px] h-[60px] lg:w-[89px] lg:h-[81px] text-center border-2 rounded-md pt-2 lg:py-5 px-1 lg:px-6 text-[32px] font-semibold`}
//                     >
//                         {minutes.toString().length == 2 ? `${minutes}` : `0${minutes}`}
//                     </p>
//                     <span className='py-3 text-base md:text-xl '>Minutes </span>
//                 </div>
//                 <div className='flex flex-col content-center items-center'>
//                     <p
//                         className={` ${timerStyle} w-[60px] h-[60px] lg:w-[89px] lg:h-[81px] text-center border-2 rounded-md pt-2 lg:py-5 px-1 lg:px-6 text-[32px] font-semibold`}
//                     >
//                         {seconds.toString().length == 2 ? `${seconds}` : `0${seconds}`}
//                     </p>
//                     <span className='py-3 text-base md:text-xl'>Seconds </span>
//                 </div>
//             </div>
//         </div>
//     );
// };

export default ModalTimer;
