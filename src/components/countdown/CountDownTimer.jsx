import { useEffect, useState } from "react";

const CountDownTimer = () => {
  const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [days, setDays] = useState(0);
  
    const getCurrentATime = () => {
      const deadline = "10:52 PM,January, 31, 2024";
  
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
  
  
    };
  
    useEffect(() => {
      setInterval(getCurrentATime, 1000);
      
    }, []);
  
  return (
    <div>
       <h2 className="font-bold text-lg">Webinar starts in:</h2>
      <div className="flex flex-wrap content-center items-center gap-4">
        <div className="flex flex-col content-center items-center">
          <p className="border-2 border-black rounded py-5 px-6 text-lg font-semibold">
            {days.toString().length == 2 ? `${days}` : `0${days}`}
          </p>{" "}
          <span>Days </span>
        </div>
        <div className="flex flex-col content-center items-center">
          <p className="border-2 border-black rounded py-5 px-6 text-lg font-semibold">
            {hours.toString().length == 2 ? `${hours}` : `0${hours}`}
          </p>
          <span>Hours </span>
        </div>
        <div className="flex flex-col content-center items-center">
          <p className="border-2 border-black rounded py-5 px-6 text-lg font-semibold">
            {minutes.toString().length == 2 ? `${minutes}` : `0${minutes}`}
          </p>
          <span>Minutes </span>
        </div>
        <div className="flex flex-col content-center items-center">
          <p className="border-black border-2 rounded py-5 px-6 text-lg font-semibold">
            {seconds.toString().length == 2 ? `${seconds}` : `0${seconds}`}
          </p>
          <span>Seconds </span>
        </div>
      </div>
    </div>
  )
}

export default CountDownTimer