import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    success: true,
    data: {
      featured: [
        {
          id: 1,
          title: "10 สถานที่ท่องเที่ยวที่ต้องไปเยือนในปี 2025",
          author: "travelguru",
          room: "Travel",
          thumbnail: "https://picsum.photos/400/300?random=1",
          comments: 245,
          votes: 789,
          timestamp: "2025-02-13T10:00:00Z",
          excerpt: "รวมสถานที่ท่องเที่ยวสุดฮิตที่ไม่ควรพลาดในปี 2025 พร้อมเคล็ดลับการเดินทางและงบประมาณ..."
        },
        {
          id: 2,
          title: "รีวิว: ร้านอาหารเปิดใหม่ย่านสยาม ต้องลอง!",
          author: "foodcritic",
          room: "Food",
          thumbnail: "https://picsum.photos/400/300?random=2",
          comments: 156,
          votes: 432,
          timestamp: "2025-02-13T09:30:00Z",
          excerpt: "พาทุกคนไปชิมร้านอาหารเปิดใหม่ย่านสยาม บรรยากาศดี อาหารอร่อย ราคาไม่แพง..."
        }
      ],
      popular: [
        {
          id: 3,
          title: "วิธีประหยัดค่าไฟฟ้าในหน้าร้อน ลดค่าไฟได้จริง!",
          author: "savemoney",
          room: "Home",
          thumbnail: "https://picsum.photos/400/300?random=3",
          comments: 324,
          votes: 876,
          timestamp: "2025-02-13T08:45:00Z",
          excerpt: "แชร์เทคนิคการประหยัดค่าไฟฟ้าในหน้าร้อน ทำตามง่าย ได้ผลจริง ลดค่าไฟได้เห็นผลชัดเจน..."
        },
        {
          id: 4,
          title: "สรุปข่าวเศรษฐกิจประจำสัปดาห์ที่ต้องรู้",
          author: "economicnews",
          room: "Finance",
          thumbnail: "https://picsum.photos/400/300?random=4",
          comments: 198,
          votes: 543,
          timestamp: "2025-02-13T08:15:00Z",
          excerpt: "รวมข่าวเศรษฐกิจสำคัญประจำสัปดาห์ที่ส่งผลกระทบต่อชีวิตประจำวันของคนไทย..."
        }
      ],
      latest: [
        {
          id: 5,
          title: "วิธีประหยัดค่าไฟฟ้าในหน้าร้อน ลดค่าไฟได้จริง!",
          author: "savemoney",
          room: "Home",
          thumbnail: "https://picsum.photos/400/300?random=5",
          comments: 324,
          votes: 876,
          timestamp: "2025-02-13T08:45:00Z",
          excerpt: "รวมข่าวเศรษฐกิจสำคัญประจำสัปดาห์ที่ส่งผลกระทบต่อชีวิตประจำวันของคนไทย..."
        },
        {
          id: 6,
          title: "วิธีประหยัดค่าไฟฟ้าในหน้าร้อน ลดค่าไฟได้จริง!",
          author: "savemoney",
          room: "Home",
          thumbnail: "https://picsum.photos/400/300?random=6",
          comments: 324,
          votes: 876,
          timestamp: "2025-02-13T08:45:00Z",
          excerpt: "รวมข่าวเศรษฐกิจสำคัญประจำสัปดาห์ที่ส่งผลกระทบต่อชีวิตประจำวันของคนไทย..."
        }
      ]
    }
  });
};
