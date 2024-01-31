import React from 'react'

const BlueBtn = ({setOpen}) => {
    console.log();
    const showModal = ()=>{
        setOpen(true)
    }
  return (
    <button onClick={showModal} style={{background: "#2F40D5", boxShadow: "5px 5px black", width: "211px"}} className='text-white p-3 font-bold'>Register Now</button>
  )
}

export default BlueBtn