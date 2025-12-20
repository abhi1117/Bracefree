"use client";
import { useState } from "react";
import { MapPin, Send } from "lucide-react";
import CommonButton from "../common/Button";

interface EnableLocationCardProps {
  onManualNext: () => void; // Move to Step 2
}

export default function EnableLocationCard({
  onManualNext,
}: EnableLocationCardProps) {
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(
    null
  );
  const [error, setError] = useState("");

  // ✅ Ask for system location access
  const handleAllowLocation = () => {
    if (!navigator.geolocation) {
      setError("❌ Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const coords = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setLocation(coords);
        setError("");
        console.log("📍 User granted access:", coords);
      },
      (err) => {
        console.error("Geolocation error:", err);
        if (err.code === err.PERMISSION_DENIED) {
          setError("⚠️ Permission denied. Please enable location access.");
        } else {
          setError("❌ Unable to retrieve location.");
        }
      }
    );
  };

  return (
    <div className="w-full p-8 rounded-3xl border border-(--color-btn-teritary-200) flex flex-col justify-center bg-(--color-bg-neutral-50)">
      {/* Icon */}
      <div className="mb-6">
        <div className="flex items-center justify-center">
          <div className="w-24 h-24 bg-(--color-line-blue-100) rounded-xl flex items-center justify-center">
            <MapPin className="text-(--color-error-line-secondary) w-10 h-10" />
          </div>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-2xl font-semibold text-(--color-text-primary) mb-2 text-center">
        Enable Location Services
      </h2>

      {/* Description */}
      <p className="text-(--color-text-primary) text-center text-sm mb-8">
        Allow Workly to use your location to show nearby service providers and
        get accurate service quotes.
      </p>

      {/* Buttons */}
      <div className="flex flex-col gap-3 w-full">
        <CommonButton
          onClick={handleAllowLocation} // show location card
          variant="primary"
          type="button"
          className="w-full py-4 rounded-xl font-semibold"
          icon={<Send className="w-4 h-4" />}
        >
          Allow location access
        </CommonButton>

        <CommonButton
          onClick={onManualNext}
          variant="secondary"
          type="button"
          className="w-full py-4 rounded-xl font-semibold"
        >
          Enter location manually
        </CommonButton>
      </div>

      {/* Error Message */}
      {error && (
        <p className="text-(--color-error-line-secondary) text-sm mt-4 text-center">
          {error}
        </p>
      )}

      {/* Show location if granted */}
      {location && (
        <div className="mt-4 text-center text-sm text-(--color-success-text)">
          📍 Location enabled:{" "}
          <span className="font-medium">
            Lat: {location.lat.toFixed(4)}, Lng: {location.lng.toFixed(4)}
          </span>
        </div>
      )}
    </div>
  );
}
