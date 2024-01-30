

const Section6 = () => {
  return (
    <div style={{backgroundColor: "#2F40D5"}} >
        <div className='grid grid-cols-1 md:grid-cols-2 gap-20 w-11/12 mx-auto py-14 items-center '>
        <div>
       <form action="" className="bg-white flex flex-col py-6 md:py-10 px-10 rounded-xl  " style={{boxShadow: " 10px 10px black", border: "5px solid black"}}>
       <h2 className="font-bold py-5">Registration Form</h2>
       <div className="grid grid-cols-2 gap-5">
      <div>
      <label htmlFor="firstname" className=""> First Name </label>
       <input type="text" name='firstname' placeholder='First Name' className='my-3 px-2 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none' />
      </div>
      <div>
      <label htmlFor="lastname" className="py-5"> last Name </label>
       <input type="text" name='lastname' placeholder='Last Name' className=' my-3 px-2 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none' />
      </div>
       </div>
       <label htmlFor="phonenumber" className="pt-3">Phone Number</label>
       <input type="number" name='phonenumber' placeholder='+234 81000000' className=' my-3 px-2 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6 outline-none' />
       <label htmlFor="email" className="pt-3"> Email </label>
       <input type="text" name='email' placeholder='johndoe@gmail.com' className=' my-3 px-2 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6 outline-none' />
       <button style={{background: "#2F40D5", boxShadow: "5px 5px black"}} className='text-white p-3 my-2 '>Register Now</button>
       </form>

        </div>
        <div className=" text-white ">
            <div className="text-center md:text-left">
                <h2 className="text-3xl py-5 ">Get Started Now!</h2>
                <p className="font-light leading-7 w-full md:w-9/12">
                  Reserve your place for an exclusive and enriching webinar 
                  experience. Act quickly to secure your spot – seating is limited.
                  </p>
                <p className="py-6">Webinar starts in:</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Section6