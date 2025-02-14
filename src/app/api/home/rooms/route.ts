import { NextResponse } from "next/server";
import headers from "../../apiConfig";

export const GET = async () => {
  try {
    const response = await fetch(
      "https://pantip.com/api/forum-service/home/get_room_recommend?tracking_code=srlzwfwEtjPmCyt7l",
      { headers }
    );

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Room data:", JSON.stringify(data, null, 2));

    if (!data.success || !Array.isArray(data.data)) {
      throw new Error("Invalid API response format");
    }

    // Ensure all room icons are using HTTPS
   

    return NextResponse.json({data: data.data});
  } catch (error) {
    console.error("Error fetching rooms:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch rooms" },
      { status: 500 }
    );
  }
};
