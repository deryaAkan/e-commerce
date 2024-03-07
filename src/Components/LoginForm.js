import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const instance = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
});

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex w-full bg-[#FAFAFA] flex-col items-center px-24 py-20 justify-center text-[#252B42] sm:justify-center sm:p-0">
      <div className="flex justify-center flex-wrap sm:gap-5 shadow-md py-10 px-20 bg-white rounded">
        <div className="flex basis-2/3 sm:flex-wrap sm:gap-5">
          <div className="w-full flex flex-col items-center relative text-black text-left gap-10 sm:gap-2">
            <h2 className="font-bold text-4xl">Welcome</h2>
            <FontAwesomeIcon
              icon={faRightToBracket}
              className="w-16 h-16"
              style={{ color: "#23A6F0" }}
            />
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-10 text-sm text-[#737373] sm:gap-2"
            >
              <div className="flex flex-col gap-3">
                <input
                  className="text-sm max-w-fit text-[#737373] shadow-md py-2 px-4"
                  type="text"
                  placeholder="Email Address"
                  {...register("email", {
                    required: "Email is required!",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <span className="text-red-500">{errors.email.message}</span>
                )}
              </div>
              <div className="flex flex-col gap-3">
                <input
                  className="text-sm max-w-fit text-[#737373] shadow-md py-2 px-4"
                  placeholder="Password"
                  type="password"
                  {...register("password")}
                />
              </div>
              <button
                className="bg-[#252B42] font-bold  text-white text-sm py-2 px-8 rounded hover:bg-[#23A6F0]"
                type="submit"
              >
                Login
              </button>
              <p className="text-basetext-gray-400 text-center">
                Don't have an account?
                <br></br>
                <Link
                  className="hover:cursor-pointer hover:font-bold text-[#23A6F0]"
                  to="/signup"
                >
                  Sign Up.
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
