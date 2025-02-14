import { NextResponse } from "next/server";
import headers from "../../apiConfig";

export const GET = async () => {
  try {
    const response = await fetch(
      "https://pantip.com/api/forum-service/forum/room_pantipmarket?room=all",
      { headers }
    );

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Market data:", JSON.stringify(data, null, 2));

    if (!data.success || !Array.isArray(data.data)) {
      throw new Error("Invalid API response format");
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching market data:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch market data" },
      { status: 500 }
    );
  }
};
