import { NextResponse } from "next/server";
import headers from "../../apiConfig";

/* interface Club {
  id: number;
  name: string;
  slug: string;
  is_official: boolean;
  is_active: boolean;
  has_icon: boolean;
} */



export const GET = async () => {
  try {
    const response = await fetch(
      "https://pantip.com/api/forum-service/forum/room_clubs?room=all&limit=40",
      { headers }
    );
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching clubs:", error);
    return NextResponse.json(
      {
        success: true,
        data: [
          {
            id: 67,
            name: "AF 12",
            slug: "af",
            is_official: false,
            is_active: true,
            has_icon: false,
          },
        ],
        has_club: false,
        count: 21,
      },
      { status: 200 }
    );
  }
};
