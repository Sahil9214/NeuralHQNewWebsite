/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect } from "react";
import { storeLocation } from "../../utils/actions/storeLocation";

export default function SilentGeolocationTracker() {
  useEffect(() => {
    if (!("geolocation" in navigator)) {
      console.log("⚠️ Geolocation is not supported by this browser");
      return;
    }

    console.log("📍 Geolocation is available");

    const handleSuccess = async (position: any) => {
      const { latitude, longitude, accuracy } = position.coords;

      console.log("📍 Coordinates obtained:", {
        latitude: latitude.toFixed(6),
        longitude: longitude.toFixed(6),
        accuracy: `${Math.round(accuracy)} meters`,
        timestamp: new Date(position.timestamp).toLocaleString(),
      });

      try {
        const result = await storeLocation(latitude, longitude);

        console.log("✅ Location details:", {
          coordinates: `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`,
          fullAddress: result.data.address,
          city: result.data.addressDetails?.city,
          state: result.data.addressDetails?.state,
          country: result.data.addressDetails?.country,
          timestamp: new Date(result.data.timestamp).toLocaleString(),
        });
      } catch (error) {
        console.error("❌ Error processing location:", error);
      }
    };

    const handleError = (error: any) => {
      console.error("🚫 Geolocation error:", {
        code: error.code,
        message: error.message,
      });
    };

    navigator.geolocation.getCurrentPosition(handleSuccess, handleError, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    });
  }, []);

  return null;
}
