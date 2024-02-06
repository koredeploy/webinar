
import BlueBtn from "../../../components/button/register-btn/BlueBtn";
import CountDownTimer from "../../../components/countdown/CountDownTimer";

// eslint-disable-next-line react/prop-types
const HeroSection = ({setOpen}) => {
    const timerStyle = "bg-black text-white"
    const counterHeading = " hidden"
  return (
    <div style={{maxWidth: "1600px", margin: "auto"}}>
          <div id="home"   className="  grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-5  pt-20 lg:pt-24 pb-10 mt-16 w-11/12 mx-auto">
      <div className=" text-center md:text-left flex flex-col items-center lg:items-start ">

          <p className="text-white hidden xl:block bg-black py-2 px-6 rounded-full text-lg">UIAB Webinar</p>
        
        <h1 className="font-bold pt-5  text-3xl md:text-3xl lg:text-3xl lg:leading-10 xl:text-5xl text-center lg:text-start  leading-10 md:leading-[3rem] xl:leading-[3.5rem] ">
          Elevate Your Skills in  an Exclusive Webinar Experience
        </h1>
        <p className=" py-3 leading-7 md:leading-9 lg:text-xl xl:text-2xl xl:leading-9 text-center lg:text-start w-full ">
        Join me as I share how I built a multi million Naira Academy in Lagos, Nigeria. I am going to personally help one lucky participant earn up to 1 Million Naira monthly in the first year.

        </p>

        <CountDownTimer timerStyle={timerStyle} heading={counterHeading}/>

        <BlueBtn setOpen={setOpen}/>
      </div>
      <div className="flex justify-center lg:justify-end">
        <img className=" object-cover w-full xl:w-11/12" src="https://res.cloudinary.com/doejcrfso/image/upload/v1706530316/webinar-project/Vector_1_zc61tv.png" alt="" />
      </div>
    </div>
    </div>
  );
};

export default HeroSection;
