"use server";

import { cookies } from "next/headers";

async function getAddressFromCoords(latitude: number, longitude: number) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`,
      {
        headers: {
          "User-Agent": "NeuralHQ/1.0",
          "Accept-Language": "en",
        },
      }
    );

    const data = await response.json();

    if (data.display_name) {
      // Handle multiple possible city field names
      const city =
        data.address.city ||
        data.address.town ||
        data.address.suburb ||
        data.address.district ||
        data.address.municipality ||
        data.address.village ||
        data.address.county;

      return {
        fullAddress: data.display_name,
        details: {
          city: city,
          state: data.address.state,
          country: data.address.country,
          postcode: data.address.postcode,
          suburb: data.address.suburb,
          district: data.address.district,
        },
      };
    }
    return null;
  } catch (error) {
    console.error("Error fetching address:", error);
    return null;
  }
}

export async function storeLocation(latitude: number, longitude: number) {
  try {
    const addressInfo = await getAddressFromCoords(latitude, longitude);

    // Store in cookie
    const cookieStore = await cookies();
    const locationData = {
      latitude,
      longitude,
      address: addressInfo?.fullAddress || null,
      addressDetails: addressInfo?.details || null,
      timestamp: new Date().toISOString(),
    };

    cookieStore.set("userLocation", JSON.stringify(locationData), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7,
    });

    // Log the stored data (only in development)
    if (process.env.NODE_ENV === "development") {
      console.log("📍 Location details:", {
        coordinates: `${latitude}, ${longitude}`,
        address: locationData.address,
        city: locationData.addressDetails?.city || "Unknown city",
        district: locationData.addressDetails?.district,
        state: locationData.addressDetails?.state,
        country: locationData.addressDetails?.country,
        timestamp: locationData.timestamp,
      });
    }

    return { success: true, data: locationData };
  } catch (error) {
    console.error("Error storing location:", error);
    throw new Error("Failed to store location data");
  }
}
