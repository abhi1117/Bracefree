"use client";
import React, { useEffect, useRef } from "react";

interface ServiceRadiusSliderProps {
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ServiceRadiusSlider({
  value,
  onChange,
}: ServiceRadiusSliderProps) {
  const sliderRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (sliderRef.current) {
      // calculate % based on range
      const percent = ((value - 1) / (20 - 1)) * 100;
      // dynamically set gradient for progress
      sliderRef.current.style.background = `linear-gradient(to right, var(--color-text-primary) ${percent}%, var(--color-btn-teritary-300) ${percent}%)`;
    }
  }, [value]);

  return (
    <div className="w-full mt-4">
      <div className="flex items-center justify-between mb-1">
        <label
          htmlFor="serviceRadius"
          className="block text-base font-medium text-(--color-text-primary)"
        >
          Service Radius
        </label>
        <span className="font-medium text-(--color-text-primary) text-sm">
          {value} km
        </span>
      </div>

      <input
        ref={sliderRef}
        id="serviceRadius"
        type="range"
        min={1}
        max={20}
        step={1}
        value={value}
        onChange={onChange}
        className="service-radius-slider w-full cursor-pointer"
      />

      <div className="flex justify-between text-sm text-gray-500 mt-1">
        <span>1 km</span>
        <span>20 km</span>
      </div>
    </div>
  );
}
