import React from 'react'

// eslint-disable-next-line react/prop-types
const WhiteBtn = ({setOpen}) => {
  const showModal= ()=>{
    setOpen(true)
  }
  return (
    <button onClick={showModal} style={{background: "#FFFFFF", boxShadow: "5px 5px black", width: "211px"}} className=' hover:text-red-500 transition duration-300 ease-in-out text-black p-3 font-bold'>Register Now</button>
  )
}

export default WhiteBtn