"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function SignInForm() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="flex items-center justify-center md:my-16 mx-8 my-24">
      <div className="w-full max-w-md rounded-lg p-6 border shadow-lg">
        <h2 className="text-2xl font-semibold text-start text-DarkBrown">
          Login In
        </h2>
        <hr className="my-4 " />
        <form className="mt-6">
          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-4 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-PrimaryColor"
            />
          </div>

          {/* Password Input with Toggle */}
          <div className="mb-4 relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-4 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-PrimaryColor"
            />
            <div
              className="absolute right-3 mt-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600 "
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-PrimaryColor hover:bg-SecondryColor rounded-md  focus:outline-none transition-all duration-300"
          >
            Login In
          </button>
        </form>

        {/* Additional Links */}
        <p className="mt-4 text-sm text-center text-gray-600">
          Don&apos;t have an account?
          <Link
            href="#"
            className="text-PrimaryColor hover:underline focus:outline-none"
          >
            {" "}
            Sign up{" "}
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignInForm;
