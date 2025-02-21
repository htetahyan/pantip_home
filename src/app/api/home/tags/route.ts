import { NextResponse } from "next/server";
import headers from "../../apiConfig";

export const GET = async () => {
  try {
    const response = await fetch(
      "https://pantip.com/api/forum-service/home/get_tag_hit?limit=10",
      { headers }
    );

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Tag data:", JSON.stringify(data, null, 2));

    if (!data.success || !Array.isArray(data.data)) {
      throw new Error("Invalid API response format");
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching tags:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch tags" },
      { status: 500 }
    );
  }
};
