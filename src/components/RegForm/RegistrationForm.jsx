import { useState } from "react";
import PhoneInput from "react-phone-number-input";

// eslint-disable-next-line react/prop-types
const RegistrationForm = ({isOpen, text}) => {
  const [value, setValue] = useState("");


  const formBorder = isOpen ? "0px " : "5px solid black "


  return (
    
    <div>
      <form
      style={{boxShadow: " 10px 10px black", }}
        action=""
        className={` ${ formBorder } bg-white flex flex-col py-6 mt-8 lg:mt-24  lg:py-10 px-10 rounded-xl `}
      >
        <h2 className="font-bold text-2xl py-5 text-center">Registration Form</h2>
        <div className="grid grid-cols-2 gap-5">
          <div>
            <label htmlFor="firstname" className=" font-bold">
              {" "}
              First Name{" "}
            </label>
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              className="my-3 px-2 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none"
            />
          </div>
          <div>
            <label htmlFor="lastname" className="py-5 font-bold">
              {" "}
              last Name{" "}
            </label>
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              className=" my-3 px-2 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none"
            />
          </div>
        </div>
        <label htmlFor="phonenumber" className="pt-3 font-bold">
          Phone Number
        </label>

        <PhoneInput
          style={{ outline: "none !important" }}
          defaultCountry="US"
          value={value}
          onChange={setValue}
          type="number"
          name="phonenumber"
          placeholder="+234 81000000"
          className="flex items-center my-3 px-2 py-3  w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400   leading-6 md:leading-8 outline-none"
        />

        <label htmlFor="email" className="pt-3 font-bold">
          {" "}
          Email{" "}
        </label>
        <input
          type="text"
          name="email"
          placeholder="johndoe@gmail.com"
          className=" my-3 px-2 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6 outline-none"
        />
        <button
          style={{
            background: "#2F40D5",
            boxShadow: "5px 5px black",
          }}
          className="text-white p-3 my-2 "
        >
          {text}
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
