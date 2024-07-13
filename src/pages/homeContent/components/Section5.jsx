import React from 'react'
import WhiteBtn from '../../../components/button/register-btn/WhiteBtn'

// eslint-disable-next-line react/prop-types
const Section5 = ({setOpen}) => {
  return (
    <div style={{maxWidth: "1600px", margin: "auto"}}>
          <div  className='py-16 w-11/12 mx-auto'>
        <div style={{border: "4px solid black", boxShadow: "8px 8px black"}} className=' bg-blue-600 text-center rounded-xl py-10 '>
          <div className='flex flex-col items-center justify-center  text-white w-full lg:w-1/2 mx-auto'> 
             <h1 className='text-4xl leading-10'> Don’t Miss this Opportunity! </h1>
            <p className='py-4 px-5 leading-7 md:leading-10 xl:leading-10 lg:text-xl xl:text-2xl'>Join Dr. Emily Johnson for an Exclusive Session on [Key Topic]. Don’t miss this opportunity to gain actionable knowledge,</p>

            <WhiteBtn setOpen={setOpen}/></div>
        </div>
    </div>
    </div>
  )
}

export default Section5