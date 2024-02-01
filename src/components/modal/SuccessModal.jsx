import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import animation from '../../assets/Animation - 1706197735539.json'
import ModalTimer from "../countdown/ModalTimer";
// import PhoneInput from "react-phone-number-input";
// import SuccessModal from "./SuccessModal";
// import RegistrationForm from "../RegForm/RegistrationForm";
// import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

// eslint-disable-next-line react/prop-types
export default function SuccessModal({}) {
  // const [value, setValue] = useState("");
  const [open, setOpen] = useState(true);

  // const submitText = "Register Now";

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
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative  top-1 md:top-10  transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 flex flex-col justify-center text-center gap-5">
                  <img src={animation} alt="" />
                  <h1 className="text-2xl font-bold">
                    Registration Successfull
                  </h1>
                  <p className="text-[18px]">
                    Congratulations!!! You’re on your way to building the next
                    academy empire. One more thing, I need you to join fellow
                    enthusiasts like yourself in an exclusive WhatsApp group.
                  </p>
                  <button
                    style={{
                      background: "#2F40D5",
                      boxShadow: "5px 5px black",
                    }}
                    className="w-full text-white p-3 font-bold"
                  >
                    Join Whatsapp Community
                  </button>
                  <ModalTimer/>
                  
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
