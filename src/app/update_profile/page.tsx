"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Camera } from "lucide-react";
import backIcon from "../../../public/back.svg";
import photo_camera from "../../../public/photo_camera.svg";
import save from "../../../public/Vector (2).svg";

import { useRouter } from "next/navigation";
import Button from "@/components/shared/Button";

const UpdateProfilePage = () => {
  const router = useRouter();
  const [profileImage, setProfileImage] = useState<string>("/man.png");
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "Mojahid Islam",
    email: "mojahid@gmail.com",
    phone: "+61 412 345 678",
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileImage(event.target?.result as string);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      alert("Profile updated successfully!");
      router.push("/my_profile");
    }, 1500);
  };

  return (
    <div className="container mx-auto px-6 lg:px-8 py-10 lg:py-28">
      {/* Header */}
      <div className="mb-10">
        <Link
          href="/my_profile"
          className="flex items-center gap-2 text-[#64748B] hover:text-[#2563EB] transition-colors mb-4 group"
        >
          <Image
            src={backIcon}
            alt="back"
            width={12}
            height={12}
            className="w-3"
          />
          <span className="text-sm font-medium hover:underline">
            Update Profile
          </span>
        </Link>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-8">
          {/* Profile Image Section */}
          <div className="flex items-center gap-6">
            <div
              className="relative group cursor-pointer"
              onClick={() => fileInputRef.current?.click()}
            >
              <div className="w-24 h-24 rounded-full overflow-hidden border border-[#DBEAFE] shadow-sm relative">
                <Image
                  src={profileImage}
                  alt="Profile"
                  fill
                  className="object-cover"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Camera className="text-white w-6 h-6 mb-1" />
                  <span className="text-white text-[10px] font-bold uppercase">
                    Update Photo
                  </span>
                </div>
              </div>

              {/* Camera Badge (Always Visible) */}
              <div className="absolute -bottom-1 -right-1 bg-[#2563EB] p-1.5 rounded-full border-2 border-white shadow-sm shadow-blue-200 group-hover:scale-110 transition-transform w-8">
                <Image
                  src={photo_camera}
                  alt="camera"
                  width={100}
                  height={100}
                />
              </div>

              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-6">
            {/* Full Name */}
            <div className="flex gap-6">
              <div className="w-full">
                <label className="text-[#1E293B]/70 text-[15px] font-medium mb-2 block">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter full name"
                  className="w-full text-sm text-[#1E293B]/70 bg-white pl-4 pr-4 py-3.5 rounded-xl border border-[#DBEAFE] focus:border-blue-600 outline-none transition-all"
                />
              </div>

              {/* Email Address */}
              <div className="w-full">
                <label className="text-[#1E293B]/70 text-[15px] font-medium mb-2 block">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  readOnly
                  className="w-full text-sm text-[#1E293B]/70 bg-gray-50 pl-4 pr-4 py-3.5 rounded-xl border border-[#DBEAFE] cursor-not-allowed outline-none"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label className="text-[#1E293B]/70 text-[15px] font-medium mb-2 block">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+ 61 412 345 678"
                className="w-full text-sm text-[#1E293B]/70 bg-white pl-4 pr-4 py-3.5 rounded-xl border border-[#DBEAFE] focus:border-blue-600 outline-none transition-all"
              />
            </div>

            {/* Actions */}
            <div className="flex-1 ">
              <Link href="/update_profile">
                <Button
                  rightIcon={
                    <Image
                      src={save}
                      alt="arrow icon"
                      width={16}
                      height={16}
                      className="transition-transform duration-200 group-hover:translate-x-1 w-4 h-4 ml-2.5"
                    />
                  }
                  variant="primary"
                  size="lg"
                  className="font-medium"
                >
                  Save
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfilePage;
