/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from "react";
import resetImage from "../../../../public/login.svg";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { useForgetNewPasswordMutation } from "@/store/feature/authApi/authApi";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type Inputs = {
    newPassword: string;
    confirmPassword: string;
};

const ForgetNewPassSet: React.FC = () => {
    const router = useRouter();
    const [verifyForgetPassword, { isLoading }] = useForgetNewPasswordMutation();
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
    const [passwordFocused, setPasswordFocused] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>({
        mode: "onChange",
    });

    const password = watch("newPassword", "");

    // Validation criteria
    const validationCriteria = [
        { label: "Minimum 8 characters", met: password.length >= 8 },
        { label: "At least one uppercase letter", met: /[A-Z]/.test(password) },
        { label: "At least one lowercase letter", met: /[a-z]/.test(password) },
        { label: "At least one number", met: /\d/.test(password) },
        { label: "At least one special character", met: /[@$!%*?&]/.test(password) },
    ];

    const isAllCriteriaMet = validationCriteria.every((c) => c.met);

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            const email = localStorage.getItem("email");
            if (!email) {
                toast.error("Email not found in session. Please try again.");
                return;
            }

            const payload = {
                email: email,
                newPassword: data.newPassword,
            };

            const result = await verifyForgetPassword(payload).unwrap();
            if (result?.success) {
                toast.success(result?.message || "Password reset successful", {
                    style: {
                        backgroundColor: "#dcfce7",
                        color: "#166534",
                        borderLeft: "6px solid #16a34a",
                    },
                });
                router.push("/");
            }
        } catch (err: any) {
            console.error("Failed to reset password", err?.data?.message);
            toast.error(err?.data?.message || "Failed to reset password", {
                style: {
                    backgroundColor: "#fee2e2",
                    color: "#991b1b",
                    borderLeft: "6px solid #dc2626",
                },
            });
        }
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
                        <h1 className="text-[#1E293B]/70 text-3xl">Reset Your Password</h1>
                        <p className="text-[#64748B] text-sm">
                            Please enter your new password to secure your account.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="space-y-6">
                            {/* New Password */}
                            <div>
                                <label className="text-[#1E293B]/70 text-[15px] font-medium mb-2 block">
                                    New Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        {...register("newPassword", {
                                            required: "Password is required",
                                            validate: () =>
                                                isAllCriteriaMet || "Password does not meet all criteria",
                                        })}
                                        onFocus={() => setPasswordFocused(true)}
                                        onBlur={(e) => {
                                            register("newPassword").onBlur(e);
                                            setPasswordFocused(false);
                                        }}
                                        placeholder="Enter new password"
                                        className={`w-full text-sm text-[#1E293B] bg-white focus:bg-transparent pl-4 pr-12 py-3.5 rounded-xl border ${errors.newPassword ? "border-red-500" : "border-[#DBEAFE]"
                                            } focus:border-blue-600 outline-none transition-all`}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword((prev) => !prev)}
                                        className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-blue-600 transition-colors"
                                    >
                                        {showPassword ? (
                                            <EyeOff className="w-5 h-5" />
                                        ) : (
                                            <Eye className="w-5 h-5" />
                                        )}
                                    </button>
                                </div>
                                <div className="h-4">
                                    {errors.newPassword && (
                                        <p className="text-red-500 text-[11px] mt-1 font-medium">
                                            {errors.newPassword.message}
                                        </p>
                                    )}
                                </div>

                                {/* Password criteria */}
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${passwordFocused ? "max-h-24 opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"
                                        }`}
                                >
                                    <p className="text-[11px] text-slate-500 leading-relaxed">
                                        Password must be at least{" "}
                                        <span
                                            className={
                                                password.length >= 8 ? "text-green-600 font-semibold" : "text-slate-600"
                                            }
                                        >
                                            8 characters
                                        </span>{" "}
                                        long, include{" "}
                                        <span
                                            className={
                                                /[A-Z]/.test(password)
                                                    ? "text-green-600 font-semibold"
                                                    : "text-slate-600"
                                            }
                                        >
                                            one uppercase letter
                                        </span>
                                        ,
                                        <span
                                            className={
                                                /[a-z]/.test(password)
                                                    ? "text-green-600 font-semibold"
                                                    : "text-slate-600"
                                            }
                                        >
                                            {" "}
                                            one lowercase letter
                                        </span>
                                        ,
                                        <span
                                            className={
                                                /\d/.test(password)
                                                    ? "text-green-600 font-semibold"
                                                    : "text-slate-600"
                                            }
                                        >
                                            {" "}
                                            one number
                                        </span>
                                        , and{" "}
                                        <span
                                            className={
                                                /[@$!%*?&]/.test(password)
                                                    ? "text-green-600 font-semibold"
                                                    : "text-slate-600"
                                            }
                                        >
                                            one special character
                                        </span>
                                        .
                                    </p>
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
                                        {...register("confirmPassword", {
                                            required: "Please confirm your password",
                                            validate: (val) => val === password || "Passwords do not match",
                                        })}
                                        placeholder="Confirm new password"
                                        className={`w-full text-sm text-[#1E293B] bg-white focus:bg-transparent pl-4 pr-12 py-3.5 rounded-xl border ${errors.confirmPassword ? "border-red-500" : "border-[#DBEAFE]"
                                            } focus:border-blue-600 outline-none transition-all`}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword((prev) => !prev)}
                                        className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-blue-600 transition-colors"
                                    >
                                        {showConfirmPassword ? (
                                            <EyeOff className="w-5 h-5" />
                                        ) : (
                                            <Eye className="w-5 h-5" />
                                        )}
                                    </button>
                                </div>
                                <div className="h-4">
                                    {errors.confirmPassword && (
                                        <p className="text-red-500 text-[11px] mt-1 font-medium">
                                            {errors.confirmPassword.message}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isLoading || !isAllCriteriaMet}
                                className={`w-full mt-4 py-3.5 rounded-xl text-white text-sm font-semibold transition-all shadow-lg active:scale-[0.98] ${isLoading || !isAllCriteriaMet
                                    ? "bg-slate-300 cursor-not-allowed"
                                    : "bg-[#2563EB]/80 hover:bg-[#2563EB]"
                                    }`}
                            >
                                {isLoading ? "Resetting..." : "Reset Password"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgetNewPassSet;
