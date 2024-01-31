import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import PhoneInput from "react-phone-number-input";
// import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export default function RegistrationModal({open, setOpen}) {
  const [value, setValue] = useState("");
//   const [open, setOpen] = useState(true);

  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-[85%] md:min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all sm:my-8  sm:w-full sm:max-w-lg">
                <form
                  action=""
                  className="bg-white flex flex-col py-6 mt-8 lg:mt-24  lg:py-10 px-10 rounded-xl  "
                >
                  <h2 className="font-bold py-5 text-center">Registration Form</h2>
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="firstname" className="">
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
                      <label htmlFor="lastname" className="py-5">
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
                  <label htmlFor="phonenumber" className="pt-3">
                    Phone Number
                  </label>

                  <PhoneInput
                    style={{ outline: "none !important" }}
                    defaultCountry="US"
                    value={value}
                    onChange={setValue}
                    type="number"
                    name="phonenumber"
                    className="flex items-center my-3 px-2 py-3  w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400   leading-6 md:leading-8 outline-none"
                  />

                  <label htmlFor="email" className="pt-3">
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
                    Register Now
                  </button>
                </form>
                {/* <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    onClick={() => setOpen(false)}
                  >
                    Deactivate
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div> */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
