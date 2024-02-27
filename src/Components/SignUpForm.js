import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("/signup", data);
      console.log("DATAAAAA", response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex w-full flex-col items-center px-24 justify-center bg-white sm:justify-center sm:p-0">
      <div className="flex justify-start w-4/5 py-5 flex-wrap sm:gap-5">
        <div className="flex basis-2/3 sm:flex-wrap sm:gap-5">
          <div className="w-full flex flex-col relative text-black text-left gap-y-2 sm:gap-2">
            <h2 className="text-base font-bold">Sign Up</h2>
            <form
              className="flex flex-col gap-10 text-sm text-[#737373] sm:gap-2"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                className="text-sm max-w-fit border-2 text-[#737373] bg-gray-50 border-gray-200 py-2 px-4"
                type="text"
                placeholder="Full Name"
                {...register("fullName", { required: true, minLength: 3 })}
              />
              {errors.fullName && errors.fullName.type === "required" && (
                <span>This field is required</span>
              )}
              {errors.fullName && errors.fullName.type === "minLength" && (
                <span>Minimum length is 3 characters</span>
              )}
              <input
                className="text-sm max-w-fit border-2 text-[#737373] bg-gray-50 border-gray-200 py-2 px-4"
                type="email"
                placeholder="Email Address"
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
              {errors.email && errors.email.type === "required" && (
                <span>This field is required</span>
              )}
              {errors.email && errors.email.type === "pattern" && (
                <span>Invalid email address</span>
              )}
              <input
                className="text-sm max-w-fit border-2 text-[#737373] bg-gray-50 border-gray-200 py-2 px-4"
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: true,
                  minLength: 8,
                  pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/,
                })}
              />
              {errors.password && errors.password.type === "required" && (
                <span>This field is required</span>
              )}
              {errors.password && errors.password.type === "minLength" && (
                <span>Password must be at least 8 characters long</span>
              )}
              {errors.password && errors.password.type === "pattern" && (
                <span>
                  Password must include at least one number, one lowercase
                  letter, one uppercase letter, and one special character
                </span>
              )}
              <input
                className="text-sm max-w-fit border-2 text-[#737373] bg-gray-50 border-gray-200 py-2 px-4"
                type="password"
                placeholder="Confirm Password"
                // {...register("confirmPassword", {
                //   validate: (value) => value === data.password,
                // })}
              />
              {errors.confirmPassword && <span>Passwords do not match</span>}
              <button className="bg-[#23A6F0] text-white font-normal text-sm py-2 px-4 rounded hover:bg-blue-300 mx-auto">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
