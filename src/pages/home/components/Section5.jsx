import React from 'react'
import WhiteBtn from '../../../components/button/register-btn/WhiteBtn'

const Section5 = () => {
  return (
    <div className='py-16 w-11/12 mx-auto'>
        <div style={{border: "4px solid black", boxShadow: "8px 8px black"}} className=' bg-blue-600 text-center rounded-xl py-10 '>
          <div className='flex flex-col items-center justify-center  text-white w-full md:w-1/2 mx-auto'> 
             <h1 className='text-4xl'> Don’t Miss this Opportunity! </h1>
            <p className='py-7 px-7 '>Join Dr. Emily Johnson for an Exclusive Session on [Key Topic]. Don’t miss this opportunity to gain actionable knowledge,</p>

            <WhiteBtn/></div>
        </div>
    </div>
  )
}

export default Section5