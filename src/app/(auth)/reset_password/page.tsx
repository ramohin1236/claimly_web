/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from "react";
import resetImage from "../../../../public/login.svg";
import Image from "next/image";
import Link from "next/link";

const ResetPassword: React.FC = () => {
  const [showOldPassword, setShowOldPassword] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add reset password logic here
    console.log("Reset password submitted");
  };

  return (
    <div className="max-w-6xl w-full mx-auto">
      <div className="flex items-center gap-8">
        {/* Left Image */}
        <div className="w-full hidden lg:block">
          <Image
            src={resetImage}
            alt="reset-password-image"
            width={100}
            height={100}
            className="w-full scale-110"
          />
        </div>

        {/* Right Form */}
        <div className="w-full p-8 max-w-lg mx-auto flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-[#1E293B]/70 text-3xl">
              Reset Your Password
            </h1>
            <p className="text-[#64748B] text-sm">
              Please enter your new password to secure your account.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              {/* Old Password */}
              <div>
                <label className="text-[#1E293B]/70 text-[15px] font-medium mb-2 block">
                  Old Password
                </label>
                <div className="relative">
                  <input
                    type={showOldPassword ? "text" : "password"}
                    required
                    placeholder="Enter old password"
                    className="w-full text-sm text-[#1E293B] bg-white focus:bg-transparent pl-4 pr-12 py-3.5 rounded-xl border border-[#DBEAFE] focus:border-blue-600 outline-none transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowOldPassword((prev) => !prev)}
                    className="absolute inset-y-0 right-3 flex items-center text-gray-400"
                  >
                    {showOldPassword ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10 0-1.053.162-2.067.463-3.021M6.423 6.423A9.956 9.956 0 0112 5c5.523 0 10 4.477 10 10a9.956 9.956 0 01-1.423 5.077M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* New Password */}
              <div>
                <label className="text-[#1E293B]/70 text-[15px] font-medium mb-2 block">
                  New Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="Enter new password"
                    className="w-full text-sm text-[#1E293B] bg-white focus:bg-transparent pl-4 pr-12 py-3.5 rounded-xl border border-[#DBEAFE] focus:border-blue-600 outline-none transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute inset-y-0 right-3 flex items-center text-gray-400"
                  >
                    {showPassword ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10 0-1.053.162-2.067.463-3.021M6.423 6.423A9.956 9.956 0 0112 5c5.523 0 10 4.477 10 10a9.956 9.956 0 01-1.423 5.077M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="text-[#1E293B]/70 text-[15px] font-medium mb-2 block">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    required
                    placeholder="Confirm new password"
                    className="w-full text-sm text-[#1E293B] bg-white focus:bg-transparent pl-4 pr-12 py-3.5 rounded-xl border border-[#DBEAFE] focus:border-blue-600 outline-none transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    className="absolute inset-y-0 right-3 flex items-center text-gray-400"
                  >
                    {showConfirmPassword ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10 0-1.053.162-2.067.463-3.021M6.423 6.423A9.956 9.956 0 0112 5c5.523 0 10 4.477 10 10a9.956 9.956 0 01-1.423 5.077M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full mt-4 py-3.5 rounded-xl bg-[#2563EB]/80 hover:bg-[#2563EB] text-white text-sm font-semibold transition-all shadow-lg active:scale-[0.98]"
              >
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
