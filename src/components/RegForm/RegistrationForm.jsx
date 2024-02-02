import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import animation from "../../assets/Animation - 1706197735539.json";
import ModalTimer from "../countdown/ModalTimer";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import { MdCancel } from "react-icons/md";
import CountDownTimer from "../countdown/CountDownTimer";
// import PhoneInput from "react-phone-number-input";
// import SuccessModal from "../modal/SuccessModal";
// import axios from axios

// eslint-disable-next-line react/prop-types
const RegistrationForm = ({ isOpen, text, submitform, setInitalModalOpen }) => {
    const [open, setOpen] = useState(false);
    const cancelButtonRef = useRef(null);
    const [loading, setLoading]= useState(false)
    const {
        control,
        handleSubmit,
        register,
        reset,
        formState: { errors },
    } = useForm();

    // const [value, setValue] = useState("");
    

    const onSubmit = async (data, e) => {
        e.preventDefault(); // Prevent default form submission behavior
        try {
            console.log("Form data submitted:", data);

            const response = await axios.post("https://webinar-server.onrender.com/api/register", data);
            console.log("Response data:", response.data);

            if (response.status === 201) {
              setLoading(false)
                reset();
                console.log("User created successfully:", response.data.user);
                setOpen(true);
            }
        } catch (error) {
            console.error("An error occurred while sending form data:", error);
        }
    };

    const formBorder = isOpen ? "0px " : "5px solid black ";

    return (
        <div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className={` ${formBorder} bg-white flex flex-col py-6 lg:py-10 px-10 rounded-xl `}
                style={{ boxShadow: " 10px 10px black" }}
            >
                <h2 className='font-bold py-5'>Registration Form</h2>
                <div className='grid grid-cols-2 gap-5'>
                    <div>
                        <label htmlFor='firstname'> First Name </label>
                        <input
                            type='text'
                            {...register("firstName", {
                                required: "This field is required",
                            })}
                            placeholder='First Name'
                            className='my-3 px-2 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none'
                        />
                        {errors.firstName && <p className='text-red-500 text-[14px]'>{errors.firstName.message}</p>}
                    </div>
                    <div>
                        <label htmlFor='lastname' className='py-5'>
                            {" "}
                            Last Name{" "}
                        </label>
                        <input
                            type='text'
                            {...register("lastName", {
                                required: "This field is required",
                            })}
                            placeholder='Last Name'
                            className=' my-3 px-2 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none'
                        />
                        {errors.lastName && <p className='text-red-500 text-[14px] '>{errors.lastName.message}</p>}
                    </div>
                </div>
                <label htmlFor='phonenumber' className='pt-3'>
                    Phone Number
                </label>
                <Controller
                    render={({ field }) => (
                        <input
                            {...field}
                            type='text'
                            placeholder='Enter phone number'
                            className='flex items-center my-3 px-2 py-3 w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 leading-6 md:leading-8 outline-none'
                        />
                    )}
                    control={control}
                    name='phoneNumber'
                    rules={{ required: "This field is required" }}
                />
                {errors.phoneNumber && <p className='text-red-500 text-[14px]'>{errors.phoneNumber.message}</p>}
                <label htmlFor='email' className='pt-3'>
                    {" "}
                    Email{" "}
                </label>
                <input
                    type='text'
                    {...register("email", {
                        required: "This field is required",
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "Enter a valid email address",
                        },
                    })}
                    placeholder='johndoe@gmail.com'
                    className=' my-3 px-2 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none'
                />
                {errors.email && <p className='text-red-500 text-[14px]'>{errors.email.message}</p>}
                <button 
                 onClick={() => {
                  setLoading(true)
              }}
                type='submit' style={{ background: "#2F40D5", boxShadow: "5px 5px black" }} className='text-white p-3 my-2 hover:text-red-500 transition duration-300 ease-in-out'>
                    {loading? 'loading..' : 'Register Now'}
                </button>
            </form>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as='div' className='relative z-10' initialFocus={cancelButtonRef} onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <div className='fixed inset-0 bbg-opacity-75 transition-opacity' />
                    </Transition.Child>

                    <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
                        <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
                            <Transition.Child
                                as={Fragment}
                                enter='ease-out duration-300'
                                enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                                enterTo='opacity-100 translate-y-0 sm:scale-100'
                                leave='ease-in duration-200'
                                leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                                leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                            >
                                <Dialog.Panel className='relative  top-14 md:top-10  transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
                                    <div className={`flex justify-end p-6`}>
                                        <MdCancel
                                            fontSize={`2rem`}
                                            onClick={() => {
                                                setInitalModalOpen(false);
                                            }}
                                        />
                                    </div>

                                    <div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 flex flex-col justify-center text-center gap-5'>
                                        <img src={animation} alt='' />
                                        <h1 className='text-2xl font-bold'>Registration Successfull</h1>
                                        <p className='text-[18px]'>
                                            Congratulations!!! You’re on your way to building the next academy empire. One more thing, I need you to join fellow
                                            enthusiasts like yourself in an exclusive WhatsApp group.
                                        </p>
                                        
                                        <button
                                            onClick={() => {
                                                setInitalModalOpen(false);
                                              
                                            }}
                                            style={{
                                                background: "#2F40D5",
                                                boxShadow: "5px 5px black",
                                            }}
                                            className='w-full text-white p-3 font-bold'
                                        >
                                            Join Whatsapp Community
                                        </button>
                                        <ModalTimer />
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    );
};

export default RegistrationForm;
