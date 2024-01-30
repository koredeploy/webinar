import React from 'react'
import logo from '../../assets/navlogo.png'

const Navbar = () => {
  return (
    <div className='bg-light w-full py-4 position-fixed top-0 '>
    <header className='w-full flex content-between items-center gap-10'>
        <img src={logo} alt="" />

        <nav>
            <ul className='pt-3 flex gap-4'>
                <li><a href="" className='text-dark-emphasis text-black'>Home</a></li>
                <li><a href="" className='text-dark-emphasis fs-5'>About</a></li>
                <li><a href="" className='text-dark-emphasis fs-5'>Speaker</a></li>
                <li ><a href="" className='text-dark-emphasis fs-5'>Video</a></li>
            </ul>
        </nav>

        <button className='nav-btn btn rounded-0 text-white bg-indigo-700 w-40 py-3 px-1 font-semibold'>
            Register Now
        </button>
    </header>
</div>
  )
}

export default Navbar