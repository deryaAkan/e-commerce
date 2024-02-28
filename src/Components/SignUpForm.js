import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
});

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [roles, setRoles] = useState([]);

  useEffect(() => {
    instance
      .get("/roles")
      .then((response) => {
        setRoles(response.data);
      })
      .catch((error) => {
        console.error("Error fetching roles:", error);
      });
  }, []);

  const defaultRoleId = roles.length >= 3 ? roles[2].id : "";

  const onSubmit = async (data) => {
    try {
      //   const response = await instance.post("/signup", data);
      //   console.log("DATAAAAA", response.data);
      console.log(data);
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
                <span className="text-red-700">This field is required</span>
              )}
              {errors.fullName && errors.fullName.type === "minLength" && (
                <span className="text-red-700">
                  Minimum length is 3 characters
                </span>
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
                <span className="text-red-700">This field is required</span>
              )}
              {errors.email && errors.email.type === "pattern" && (
                <span className="text-red-700">Invalid email address</span>
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
                <span className="text-red-700">This field is required</span>
              )}
              {errors.password && errors.password.type === "minLength" && (
                <span className="text-red-700">
                  Password must be at least 8 characters long
                </span>
              )}
              {errors.password && errors.password.type === "pattern" && (
                <span className="text-red-700">
                  Password must include at least one number, one lowercase
                  letter, one uppercase letter, and one special character
                </span>
              )}
              <input
                className="text-sm max-w-fit border-2 text-[#737373] bg-gray-50 border-gray-200 py-2 px-4"
                type="password"
                placeholder="Confirm Password"
              />
              {errors.confirmPassword && (
                <span className="text-red-700">Passwords do not match</span>
              )}
              <select
                className="text-sm max-w-fit border-2 text-[#737373] bg-gray-50 border-gray-200 py-2 px-4"
                defaultValue={defaultRoleId} // Default value'yi defaultRoleId state'inden alıyoruz
                {...register("role_id")}
              >
                {roles.map((role) => (
                  <option key={role.id} value={role.id}>
                    {role.code}
                  </option>
                ))}
              </select>

              <>
                <input
                  className="text-sm max-w-fit border-2 text-[#737373] bg-gray-50 border-gray-200 py-2 px-4"
                  type="text"
                  placeholder="Store Name"
                  {...register("storeName", {
                    required: true,
                    minLength: 3,
                  })}
                />
                {errors.storeName && errors.storeName.type === "required" && (
                  <span className="text-red-700">Store Name is required</span>
                )}
                {errors.storeName && errors.storeName.type === "minLength" && (
                  <span className="text-red-700">
                    Store Name must be at least 3 characters long
                  </span>
                )}
                <input
                  className="text-sm max-w-fit border-2 text-[#737373] bg-gray-50 border-gray-200 py-2 px-4"
                  type="tel"
                  placeholder="Store Phone"
                  {...register("storeName", {
                    required: true,
                    minLength: 3,
                    pattern: {
                      value: /^(?:\+?90|0)?[0-9]{10}$/,
                      message: "Please enter a valid Turkish phone number",
                    },
                  })}
                />
                <input
                  className="text-sm max-w-fit border-2 text-[#737373] bg-gray-50 border-gray-200 py-2 px-4"
                  type="text"
                  placeholder="Store Tax ID"
                  {...register("taxID", {
                    required: true,
                    pattern: {
                      value: /^T\d{4}V\d{6}$/,
                      message:
                        "Please enter a valid Store Tax ID matching the pattern TXXXXVXXXXXX",
                    },
                  })}
                />
                <input
                  className="text-sm max-w-fit border-2 text-[#737373] bg-gray-50 border-gray-200 py-2 px-4"
                  type="text"
                  placeholder="Store Bank Account"
                  {...register("bankAccount", {
                    required: true,
                    pattern: {
                      value: /^TR\d{2}\d{5}\d{1}[0-9A-Z]{16}$/,
                      message: "Please enter a valid Turkish IBAN",
                    },
                  })}
                />
              </>

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
