// components/ServiceMap.jsx
"use client";

import React, { useMemo } from "react";
import { MapContainer, TileLayer, Marker, Circle } from "react-leaflet";

// Import Leaflet CSS and compatibility styles
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

// Coordinates for Dallas, TX (approximation)
const DEFAULT_CENTER = [32.7767, -96.797]; // Dallas, TX

// Component to dynamically update the Circle radius
function RadiusCircle({ center, radius }) {
  // radius is passed in kilometers, but Leaflet Circle radius is in meters.
  const radiusInMeters = radius * 1000;

  return (
    <Circle
      center={center}
      radius={radiusInMeters}
      pathOptions={{
        color: "#3B82F6", // Tailwind blue-500
        fillColor: "#3B82F6",
        fillOpacity: 0.15,
        weight: 2,
        dashArray: "5, 5",
      }}
    />
  );
}

export default function ServiceMap({ radiusKm }) {
  return (
    <MapContainer
      center={DEFAULT_CENTER}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "300px", width: "100%", borderRadius: "8px" }}
      className="z-10" // Lower z-index to ensure it doesn't block other elements
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Center Marker */}
      <Marker position={DEFAULT_CENTER} />

      {/* Dynamic Service Radius Circle */}
      <RadiusCircle center={DEFAULT_CENTER} radius={radiusKm} />
    </MapContainer>
  );
}

// Map components must be loaded dynamically in Next.js to avoid SSR issues
import dynamic from "next/dynamic";

const DynamicServiceMap = dynamic(() => Promise.resolve(ServiceMap), {
  ssr: false, // This is crucial for Leaflet
});

export { DynamicServiceMap };
