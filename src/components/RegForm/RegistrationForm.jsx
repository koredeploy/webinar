import { useForm, Controller } from "react-hook-form";
// import CountDownTimerWhite from "../../../components/countdown/CountDownWhite";
import axios from "axios";

// eslint-disable-next-line react/prop-types
const RegistrationForm = () => {
  const {
    control,
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, e) => {
    try {
      e.preventDefault(); // Prevent default form submission behavior

      console.log("Form data submitted:", data);

      const response = await axios.post(
        "https://webinar-server.onrender.com/api/register",
        data
      );

      console.log("Response data:", response.data);

      if (response.status === 201) {
        console.log("User created successfully:", response.data.user);
        // You can add further logic here, such as showing a success message to the user.

        // Reload the page to clear the input fields
        window.location.reload();
      } else {
        console.error("Failed to create user.");
        // You can handle errors and display appropriate messages to the user.
      }
    } catch (error) {
      console.error("An error occurred while sending form data:", error);
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white flex flex-col py-6 lg:py-10 px-10 rounded-xl"
        style={{ boxShadow: " 10px 10px black", border: "5px solid black" }}
      >
        <h2 className="font-bold py-5">Registration Form</h2>
        <div className="grid grid-cols-2 gap-5">
          <div>
            <label htmlFor="firstname"> First Name </label>
            <input
              type="text"
              {...register("firstName", {
                required: "This field is required",
              })}
              placeholder="First Name"
              className="my-3 px-2 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none"
            />
            {errors.firstName && (
              <p className="text-red-500">{errors.firstName.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="lastname" className="py-5">
              {" "}
              Last Name{" "}
            </label>
            <input
              type="text"
              {...register("lastName", {
                required: "This field is required",
              })}
              placeholder="Last Name"
              className=" my-3 px-2 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none"
            />
            {errors.lastName && (
              <p className="text-red-500">{errors.lastName.message}</p>
            )}
          </div>
        </div>
        <label htmlFor="phonenumber" className="pt-3">
          Phone Number
        </label>
        <Controller
          render={({ field }) => (
            <input
              {...field}
              type="text"
              placeholder="Enter phone number"
              className="flex items-center my-3 px-2 py-3 w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 leading-6 md:leading-8 outline-none"
            />
          )}
          control={control}
          name="phoneNumber"
          rules={{ required: "This field is required" }}
        />
        {errors.phoneNumber && (
          <p className="text-red-500">{errors.phoneNumber.message}</p>
        )}
        <label htmlFor="email" className="pt-3">
          {" "}
          Email{" "}
        </label>
        <input
          type="text"
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Enter a valid email address",
            },
          })}
          placeholder="johndoe@gmail.com"
          className=" my-3 px-2 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <button
          type="submit"
          style={{ background: "#2F40D5", boxShadow: "5px 5px black" }}
          className="text-white p-3 my-2"
        >
          Register Now
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
