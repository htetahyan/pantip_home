import { NextResponse } from "next/server";
import headers from "../../apiConfig";
/* interface SidebarContent {
  name: string;
  weight: number;
  image_url: string[];
  post_url: string;
} */

export const GET = async () => {
  try {
    const response = await fetch(
      "https://pantip.com/api/forum-service/home/get_sidebar_content",
      {headers}
    );
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching sidebar content:", error);
    return NextResponse.json(
      {
        success: true,
        data: [
          {
            name: "พูดคุยกับ เอินเอิน และ แฟร์รี่ จากภาพยนตร์เรื่อง แฟลตเกิร์ล ชั้นห่างระหว่างเรา",
            weight: 20,
            image_url: [
              "https://ptcdn.info/home_sidebar_content/2025-02/67a5d801caac0af66f5e7bc4_m3kser13eg_200.jpg",
              "https://ptcdn.info/home_sidebar_content/2025-02/67a5d801caac0af66f5e7bc4_m3kser13eg_400.jpg",
              "https://ptcdn.info/home_sidebar_content/2025-02/67a5d801caac0af66f5e7bc4_m3kser13eg_1000.jpg"
            ],
            post_url: "https://pantip.com/s/rtt73"
          },
          {
            name: "[Pantip Point] วาเลนไทน์สายลุ้น น้องเพี้ยนคนไหนโดนใจคุณ? 💝",
            weight: 20,
            image_url: [
              "https://ptcdn.info/home_sidebar_content/2025-02/67a023bccaac0ae25250b924_6ys423s10m_200.png",
              "https://ptcdn.info/home_sidebar_content/2025-02/67a023bccaac0ae25250b924_6ys423s10m_400.png",
              "https://ptcdn.info/home_sidebar_content/2025-02/67a023bccaac0ae25250b924_6ys423s10m_1000.png"
            ],
            post_url: "https://pantip.com/s/azEQ7"
          },
          {
            name: "D-NA พร้อมเสิร์ฟซิงเกิลใหม่ 'BREAK MY HEART'",
            weight: 20,
            image_url: [
              "https://ptcdn.info/home_sidebar_content/2025-02/67ad9acacaac0a33e4170405_guhrbyz3de_200.jpg",
              "https://ptcdn.info/home_sidebar_content/2025-02/67ad9acacaac0a33e4170405_guhrbyz3de_400.jpg",
              "https://ptcdn.info/home_sidebar_content/2025-02/67ad9acacaac0a33e4170405_guhrbyz3de_1000.jpg"
            ],
            post_url: "https://pantip.com/s/ksogC"
          }
        ]
      },
      { status: 200 }
    );
  }
};
