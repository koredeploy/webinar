// import React from 'react'
import BlueBtn from '../../components/button/register-btn/BlueBtn'

const HeroSection = () => {
  let btnText = "Buy Now"
  return (
<div className='bg-[#E9F7EE;]'>
<div style={{maxWidth: "1600px", margin: "auto"}}>
    <div id="home"   className="  grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-5 xl:gap-1  pt-20 lg:pt-24 pb-10 mt-16 w-11/12 mx-auto">
<div className=" text-center md:text-left flex flex-col items-center lg:items-start ">
  
  <h1 className="font-bold pt-5  text-3xl md:text-3xl lg:text-5xl lg:leading-[3.2rem] xl:text-6xl text-center lg:text-start  leading-10 md:leading-[3rem] xl:leading-[4rem] ">
  THE ULTIMATE ACADEMY LAUNCH BLUEPRINT (UALB)
  </h1>
  <p className=" py-3 leading-7 md:leading-9 lg:text-xl xl:text-2xl xl:leading-9 text-center lg:text-start w-full ">
  How to build an academy that generates multi- <br /> million Naira monthly
  </p>

  <BlueBtn btnText={btnText}/>
</div>
<div className="flex justify-center lg:justify-end ">
<div  className='rounded-2xl' >
<img style={{border: "5px solid black"}} className=" rounded-2xl object-contain w-full " src="https://res.cloudinary.com/doejcrfso/image/upload/v1707379888/colleagues-studying-together-university-library_2_hlyjzb.png" alt="" />
</div>
</div>
</div>
</div>
</div>
  )
}

export default HeroSection