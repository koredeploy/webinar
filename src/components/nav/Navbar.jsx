// import logo from '../../assets/navlogo.png'
import { TiThMenu } from "react-icons/ti";
import { IoCloseOutline } from "react-icons/io5";
import BlueBtn from "../button/register-btn/BlueBtn";
// import {HashLink} from 'react-router-hash-link'
import { useRef, useState } from "react";
import { Link } from "react-scroll";

// eslint-disable-next-line react/prop-types
const Navbar = ({ setOpen }) => {
    const [show, setShow] = useState(false);

    return (
        <div className='w-full max-w-screen-4xl py-10 fixed -top-1 shadow-md z-10' style={{ backgroundColor: "#E9F7EE" }}>
            <header className=' flex lg:flex-row flex-col justify-between lg:items-center gap-10 w-11/12 mx-auto ' style={{ maxWidth: "1440px" }}>
                <div className='flex justify-between items-center'>
                    <span>
                        <img src='https://res.cloudinary.com/doejcrfso/image/upload/v1706694793/webinar-project/Webinar_qmnyis.png' alt='' className='w-full' />
                    </span>

                    <button onClick={() => setShow(!show)}>
                        {show ? <IoCloseOutline className='text-4xl lg:hidden' /> : <TiThMenu className='text-4xl lg:hidden' />}
                    </button>
                </div>

                <nav className={show ? "block" : "lg:block hidden"} onClick={() => setShow(false)}>
                    <ul className='pt-3 flex lg:flex-row flex-col gap-10'>
                        <li>
                            <Link offset={-50} className='text-dark-emphasis text-[20px] text-black' to='home'>
                                {" "}
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className='text-dark-emphasis text-[20px] text-black' to='about'>
                                {" "}
                                About
                            </Link>
                        </li>
                        <li>
                            <Link className='text-dark-emphasis text-[20px] text-black' to='speaker'>
                                {" "}
                                Speaker
                            </Link>
                        </li>
                        <li>
                            <Link offset={-50} className='text-dark-emphasis text-[20px] text-black' to='video'>
                                {" "}
                                Video
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* <button className={show ?'nav-btn btn rounded-0 text-white bg-indigo-700 w-40 py-3 px-1 font-semibold block' : 'nav-btn btn rounded-0 text-white bg-indigo-700 w-40 py-3 px-1 font-semibold md:block hidden'}>
            Register Now
        </button> */}
                <div className={show ? " block mx-auto" : " lg:block hidden"} onClick={() => setShow(false)}>
                    <BlueBtn setOpen={setOpen} />
                </div>
            </header>
        </div>
    );
};

export default Navbar;
