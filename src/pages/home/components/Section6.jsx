
import { useState } from "react"
import CountDownTimerWhite from "../../../components/countdown/CountDownWhite"
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import RegistrationForm from "../../../components/RegForm/RegistrationForm"
import CountDownTimer from "../../../components/countdown/CountDownTimer"

const Section6 = () => {
  const [value, setValue] = useState('')
  const timerStyle = "bg-white text-black"
  const submitText = "Register Now"
  return (
    <div style={{backgroundColor: "#2F40D5"}} >
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 w-11/12 mx-auto py-14 items-center '>
        <div className=" text-white lg:order-last">
            <div className="text-center lg:text-left">
                <h2 className="text-3xl py-5 ">Get Started Now!</h2>
                <p className="font-light leading-7 w-full lg:w-9/12">
                  Reserve your place for an exclusive and enriching webinar 
                  experience. Act quickly to secure your spot – seating is limited.
                  </p>
                <CountDownTimer timerStyle={timerStyle}/>
            </div>
        </div>
        <div>
          <RegistrationForm text={submitText}/>
   

        </div>

        </div>
    </div>
  )
}

export default Section6