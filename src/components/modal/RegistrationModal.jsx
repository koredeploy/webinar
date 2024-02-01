import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import PhoneInput from "react-phone-number-input";
import SuccessModal from "./SuccessModal";
import RegistrationForm from "../RegForm/RegistrationForm";
// import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

// eslint-disable-next-line react/prop-types
export default function RegistrationModal({open, setOpen, }) {
  const [value, setValue] = useState("");
//   const [open, setOpen] = useState(true);

  const cancelButtonRef = useRef(null);

  const submitText = "Register Now"

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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg text-left shadow-md transition-all sm:my-8  sm:w-full sm:max-w-lg">
                <RegistrationForm isOpen={open} text={submitText} />
                
              </Dialog.Panel>
            </Transition.Child>
          </div>
          {/* <SuccessModal/> */}
        </div>
      </Dialog>
    </Transition.Root>
  );
}
