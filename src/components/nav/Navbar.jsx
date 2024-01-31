import React, { useState } from 'react'
// import logo from '../../assets/navlogo.png'
import { TiThMenuOutline } from "react-icons/ti";
import { IoCloseOutline } from "react-icons/io5";
import BlueBtn from '../button/register-btn/BlueBtn';

const Navbar = ({setOpen}) => {

    const [show, setShow] = useState(false)
  return (
    <div  className='w-full max-w-screen-4xl py-10 fixed top-0 ' style={{backgroundColor: "#E9F7EE", zIndex: "100" }} >
    <header className=' flex lg:flex-row flex-col justify-between lg:items-center gap-10 w-11/12 mx-auto' style={{maxWidth: "1440px"}}>
        <div className='flex justify-between'>
        <span><img src="https://res.cloudinary.com/doejcrfso/image/upload/v1706694793/webinar-project/Webinar_qmnyis.png" alt="" className='w-full' /></span>
    
        <button onClick={() => setShow(!show)}>{show ? <IoCloseOutline className='text-4xl lg:hidden'/> :<TiThMenuOutline className='text-4xl lg:hidden'/>}</button>
        </div>

        <nav className={show ? "block" :"lg:block hidden"}>
            <ul className='pt-3 flex lg:flex-row flex-col gap-10'>
                <li><a href="" className='text-dark-emphasis text-black'>Home</a></li>
                <li><a href="" className='text-dark-emphasis fs-5'>About</a></li>
                <li><a href="" className='text-dark-emphasis fs-5'>Speaker</a></li>
                <li ><a href="" className='text-dark-emphasis fs-5'>Video</a></li>
            </ul>
        </nav>

        {/* <button className={show ?'nav-btn btn rounded-0 text-white bg-indigo-700 w-40 py-3 px-1 font-semibold block' : 'nav-btn btn rounded-0 text-white bg-indigo-700 w-40 py-3 px-1 font-semibold md:block hidden'}>
            Register Now
        </button> */}
        <div className={show ?' block mx-auto' : ' lg:block hidden'}>
        <BlueBtn setOpen={setOpen} />
        </div>
    </header>
</div>
  )
}

export default Navbar