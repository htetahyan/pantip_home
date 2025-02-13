import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    success: true,
    data: {
      trending: [
        {
          id: 1,
          title: "รีวิว iPhone 15 Pro Max หลังใช้งานมา 3 เดือน คุ้มค่าการอัพเกรดไหม?",
          author: "techreview",
          room: "Mobile",
          comments: 156,
          votes: 423,
          timestamp: "2025-02-13T10:30:00Z",
          tags: ["Apple", "iPhone", "Review"]
        },
        {
          id: 2,
          title: "แนะนำร้านอาหารญี่ปุ่นย่านทองหล่อ บรรยากาศดี ราคาไม่แพง",
          author: "foodlover",
          room: "Food",
          comments: 89,
          votes: 245,
          timestamp: "2025-02-13T09:15:00Z",
          tags: ["ร้านอาหาร", "อาหารญี่ปุ่น", "ทองหล่อ"]
        },
        {
          id: 3,
          title: "วิธีออมเงินยังไงให้มีเงินล้านในวัย 30",
          author: "moneyguru",
          room: "Finance",
          comments: 234,
          votes: 567,
          timestamp: "2025-02-13T08:45:00Z",
          tags: ["การเงิน", "การออม", "การลงทุน"]
        }
      ],
      latest: [
        {
          id: 4,
          title: "แชร์ประสบการณ์เที่ยวญี่ปุ่นหน้าหนาว 2025 งบ 30,000 บาท",
          author: "traveler",
          room: "Travel",
          comments: 45,
          votes: 123,
          timestamp: "2025-02-13T11:00:00Z",
          tags: ["ญี่ปุ่น", "ท่องเที่ยว", "ประสบการณ์"]
        },
        {
          id: 5,
          title: "รวมเทคนิคการดูแลผิวหน้าในหน้าร้อน ให้ผิวชุ่มชื้นตลอดวัน",
          author: "beautyexpert",
          room: "Beauty",
          comments: 67,
          votes: 189,
          timestamp: "2025-02-13T10:45:00Z",
          tags: ["ความงาม", "สกินแคร์", "หน้าร้อน"]
        }
      ]
    }
  });
};
