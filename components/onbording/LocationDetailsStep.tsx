"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import CommonButton from "../common/Button";
import ServiceRadiusSlider from "../ServiceRadiusSlider";
import Switch from "../common/Switch";

interface LocationStepProps {
  onNext: () => void;
  onBack: () => void;
}

// Dynamically import the map component
const DynamicServiceMap = dynamic(
  () => import("./ServiceMap").then((mod) => mod.DynamicServiceMap),
  {
    loading: () => (
      <div className="h-72 bg-gray-200 flex items-center justify-center rounded-lg">
        Loading Map...
      </div>
    ),
    ssr: false,
  }
);

export default function LocationDetialsStep({
  onNext,
  onBack,
}: LocationStepProps) {
  // Form State
  const [formData, setFormData] = useState({
    streetAddress: "",
    landmark: "",
    city: "Dallas",
    state: "TX",
    zipCode: "",
    serviceRadius: 6, // Default to 10 km
    autoAccept: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleToggle = () => {
    setFormData((prev) => ({
      ...prev,
      autoAccept: !prev.autoAccept,
    }));
  };

  const handleSliderChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      serviceRadius: Number(e.target.value),
    }));
  };

  return (
    <div className="w-full mx-auto space-y-8">
      {/* --- Address Form Section --- */}
      <div className="w-full p-8 rounded-3xl border border-(--color-btn-teritary-200) flex flex-col justify-center bg-(--color-bg-neutral-50)">
        <div className="space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="streetAddress"
              className="block text-base font-medium text-(--color-text-primary)"
            >
              Street Address
              <span className="text-(--color-error-line-secondary)">*</span>
            </label>
            <input
              type="text"
              name="streetAddress"
              id="streetAddress"
              placeholder="Street Address"
              value={formData.streetAddress}
              onChange={handleChange}
              className="w-full border border-(--color-btn-teritary-200) rounded-xl p-4 focus:border-(--color-line-blue-200) focus:outline-none"
              required
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="landmark"
              className="block text-base font-medium text-(--color-text-primary)"
            >
              Landmark (Optional)
            </label>
            <input
              type="text"
              name="landmark"
              id="landmark"
              placeholder="Landmark"
              value={formData.landmark}
              onChange={handleChange}
              className="w-full border border-(--color-btn-teritary-200) rounded-xl p-4 focus:border-(--color-line-blue-200) focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label
                htmlFor="city"
                className="block text-base font-medium text-(--color-text-primary)"
              >
                City
                <span className="text-(--color-error-line-secondary)">*</span>
              </label>
              <input
                type="text"
                name="city"
                id="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full border border-(--color-btn-teritary-200) rounded-xl p-4 focus:border-(--color-line-blue-200) focus:outline-none"
                required
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="state"
                className="block text-base font-medium text-(--color-text-primary)"
              >
                State
                <span className="text-(--color-error-line-secondary)">*</span>
              </label>
              <input
                type="text"
                name="state"
                id="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full border border-(--color-btn-teritary-200) rounded-xl p-4 focus:border-(--color-line-blue-200) focus:outline-none"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="zipCode"
              className="block text-base font-medium text-(--color-text-primary)"
            >
              ZIP code
              <span className="text-(--color-error-line-secondary)">*</span>
            </label>
            <input
              type="text"
              name="zipCode"
              id="zipCode"
              placeholder="Enter Zipcode"
              value={formData.zipCode}
              onChange={handleChange}
              className="w-full border border-(--color-btn-teritary-200) rounded-xl p-4 focus:border-(--color-line-blue-200) focus:outline-none"
              required
            />
          </div>
        </div>
      </div>

      {/* --- Map and Radius Section --- */}
      <div className="w-full p-8 rounded-3xl border border-(--color-btn-teritary-200) flex flex-col justify-center bg-(--color-bg-neutral-50) space-y-4">
        <DynamicServiceMap radiusKm={formData.serviceRadius} />

        <div className="space-y-1 pt-4">
          <ServiceRadiusSlider
            value={formData.serviceRadius}
            onChange={handleSliderChange}
          />
        </div>
      </div>

      {/* --- Preferred Service Areas Section --- */}
      <div className="w-full p-8 rounded-3xl border border-(--color-btn-teritary-200) flex flex-col justify-center bg-(--color-bg-neutral-50) space-y-4">
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <h3 className="text-lg font-medium text-(--color-text-primary)">
              Preferred Service Areas
            </h3>
            <p className="text-xs text-(--color-text-secondary)">
              Get priority notifications for bookings in these areas
            </p>
          </div>
          <CommonButton
            // onClick={onManualNext}
            variant="secondary"
            type="button"
            className="font-semibold bg-(--color-text-secondary) border border-(--color-text-muted) py-2 text-sm text-(--color-text-primary) rounded-xl"
          >
            {" "}
            Add Area
          </CommonButton>
        </div>

        {/* Auto-accept Toggle */}
        <div className="bg-(--color-error-bg) p-4 rounded-xl flex justify-between items-center border border-(--color-error-bg)">
          <div className="space-y-1">
            <p className="font-medium text-(--color-text-primary)">
              Auto-accept Nearby Jobs
            </p>
            <p className="text-xs text-(--color-text-secondary)">
              Automatically accept bookings within 2 km
            </p>
          </div>
          <Switch isEnabled={formData.autoAccept} onToggle={handleToggle} />
        </div>
      </div>

      {/* --- Navigation Buttons --- */}
      <div className="flex justify-between gap-6 mt-6 w-full">
        <CommonButton
          onClick={onBack} // show location card
          variant="secondary"
          type="button"
          className="w-full  py-4 rounded-xl font-semibold"
        >
          Back
        </CommonButton>
        <CommonButton
          onClick={onNext} // show location card
          variant="primary"
          type="button"
          className="w-full py-4 rounded-xl font-semibold"
        >
          Next
        </CommonButton>
      </div>
    </div>
  );
}
