"use client";
import Image from "next/image";
import React, { useState } from "react";
import CommonButton from "../common/Button";
import EnableLocationCard from "./EnableLocationCard";

interface PersonalDetailsStepProps {
  onNext: () => void; // from SetupPage
}

export default function PersonalDetailsStep({
  onNext,
}: PersonalDetailsStepProps) {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [showLocationCard, setShowLocationCard] = useState(false); // NEW — toggle between forms

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfileImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  // ✅ When user clicks Next on main form
  const handleNextClick = () => {
    setShowLocationCard(true);
  };

  // ✅ Callback from EnableLocationCard → when user clicks “Enter location manually”
  const handleManualLocationNext = () => {
    onNext(); // move to Step 2 (Company Details)
  };

  // ✅ Render either personal form OR location card
  if (showLocationCard) {
    return <EnableLocationCard onManualNext={handleManualLocationNext} />;
  }

  return (
    <>
      <div className="w-full p-8 rounded-3xl border border-(--color-btn-teritary-200) flex flex-col justify-center bg-(--color-bg-neutral-50)">
        {/* Profile Upload */}
        <div className="flex flex-col items-center mb-5">
          <label
            htmlFor="profile-upload"
            className="cursor-pointer relative group"
          >
            <div className="w-16 h-16 rounded-full border-2 border-dashed border-(--color-btn-teritary-300) flex items-center justify-center overflow-hidden bg-(--color-btn-teritary-100) group-hover:border-(--color-line-blue-200) transition">
              {profileImage ? (
                <Image
                  src={profileImage}
                  alt="Profile"
                  fill
                  className=" object-cover"
                />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="gray"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              )}
            </div>
            <input
              type="file"
              id="profile-upload"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </label>
          <p className="text-xs text-(--color-text-primary) mt-2">
            Add your photo to build trust
          </p>
        </div>

        {/* Simple Form Fields */}
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-(--color-text-primary) mb-1 font-medium">
                Full Name *
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full border border-(--color-btn-teritary-200) rounded-xl p-4 focus:border-(--color-line-blue-200) focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-(--color-text-primary) mb-1 font-medium">
                Display Name *
              </label>
              <input
                type="text"
                placeholder="Enter display name"
                className="w-full border border-(--color-btn-teritary-200) rounded-xl p-4 focus:border-(--color-line-blue-200) focus:outline-none"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-(--color-text-primary) mb-1 font-medium">
              Email address
            </label>
            <input
              type="email"
              placeholder="your@gmail.com"
              className="w-full border border-(--color-btn-teritary-200) rounded-xl p-4 focus:border-(--color-line-blue-200) focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-(--color-text-primary) mb-1 font-medium">
                Account Type
              </label>
              <select className="w-full border border-(--color-btn-teritary-200) rounded-xl p-4 focus:border-(--color-line-blue-200) focus:outline-none">
                <option>Business</option>
                <option>Individual</option>
              </select>
            </div>
            <div>
              <label className="block text-(--color-text-primary) mb-1 font-medium">
                Preferred Language
              </label>
              <select className="w-full border border-(--color-btn-teritary-200) rounded-xl p-4 focus:border-(--color-line-blue-200) focus:outline-none">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-(--color-text-primary) mb-1 font-medium">
              Legal Business Name *
            </label>
            <input
              type="text"
              placeholder="eg. Smith Plumbing LLC"
              className="w-full border border-(--color-btn-teritary-200) rounded-xl p-4 focus:border-(--color-line-blue-200) focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-(--color-text-primary) mb-1 font-medium">
                EIN Number
              </label>
              <input
                type="text"
                placeholder="XX-XXX-XXXX"
                className="w-full border border-(--color-btn-teritary-200) rounded-xl p-4 focus:border-(--color-line-blue-200) focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-(--color-text-primary) mb-1 font-medium">
                Company Type
              </label>
              <select className="w-full border border-(--color-btn-teritary-200) rounded-xl p-4 focus:border-(--color-line-blue-200) focus:outline-none">
                <option>LLC</option>
                <option>Partnership</option>
                <option>Sole Proprietor</option>
                <option>Corporation</option>
              </select>
            </div>
          </div>
        </form>
      </div>

      {/* Footer Button */}
      <div className="flex justify-end mt-6 w-full">
        <CommonButton
          onClick={handleNextClick} // show location card
          variant="primary"
          type="button"
          className="w-full max-w-[300px] py-4 rounded-xl font-semibold"
        >
          Next
        </CommonButton>
      </div>
    </>
  );
}
