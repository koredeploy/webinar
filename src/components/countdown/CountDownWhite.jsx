import { useEffect, useState } from "react";

const CountDownTimerWhite = () => {
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
        // console.log("Countdown completed");
        setSeconds(0)
        setMinutes(0)
        setHours(0)
        setDays(0)
      }
  
  
    }
    useEffect(() => {
      setInterval(getCurrentATime, 1000);
      
    }, []);
  
  return (
    <div className="py-3">
       <h2 className="font-bold text-lg py-3 text-center lg:text-start" >Webinar starts in:</h2>
      <div className="flex flex-wrap items-center justify-center lg:justify-start  lg:items-end gap-3 lg:gap-5">
        <div className="flex flex-col content-center items-center">
          <p  style={{border: "2px solid white"}} className=" rounded py-4 lg:py-5 px-4 lg:px-6 text-lg font-semibold">
            {days.toString().length == 2 ? `${days}` : `0${days}`}
          </p>{" "}
          <span className="py-3 text-base md:text-xl">Days </span>
        </div>
        <div className="flex flex-col content-center items-center">
          <p style={{border: "2px solid white"}} className=" rounded py-4 lg:py-5 px-4 lg:px-6 text-lg font-semibold">
            {hours.toString().length == 2 ? `${hours} `: `0${hours}`}
          </p>
          <span className="py-3 text-base md:text-xl">Hours </span>
        </div>
        <div className="flex flex-col content-center items-center">
          <p style={{border: "2px solid white"}} className="rounded py-4 lg:py-5 px-4 lg:px-6 text-lg font-semibold">
            {minutes.toString().length == 2 ? `${minutes}` : `0${minutes}`}
          </p>
          <span className="py-3 text-base md:text-xl ">Minutes </span>
        </div>
        <div className="flex flex-col content-center items-center">
          <p style={{border: "2px solid white"}} className=" border-2 rounded py-4 lg:py-5 px-4 lg:px-6 text-lg font-semibold">
            {seconds.toString().length == 2 ? `${seconds}` : `0${seconds}`}
          </p>
          <span className="py-3 text-base md:text-xl">Seconds </span>
        </div>
      </div>
    </div>
  )
}

export default CountDownTimerWhite