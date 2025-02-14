import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    success: true,
    data: {
      featured: [
        {
          id: 1,
          title: "ดูดวงความรัก ประจำเดือนกุมภาพันธ์ 2025 ราศีไหนมีเกณฑ์เจอคู่แท้",
          author: "horoscope_master",
          room: "Horoscope",
          thumbnail: "https://picsum.photos/400/300?random=1",
          comments: 456,
          votes: 1289,
          timestamp: "2025-02-14T08:00:00Z",
          excerpt: "เช็กดวงความรักของคุณในเดือนแห่งความรักนี้..."
        },
        {
          id: 2,
          title: "รีวิว! เที่ยวญี่ปุ่นหน้าหนาว งบ 25,000 ครบทุกที่ในโตเกียว",
          author: "japan_lover",
          room: "Travel",
          thumbnail: "https://picsum.photos/400/300?random=2",
          comments: 892,
          votes: 2341,
          timestamp: "2025-02-14T07:30:00Z",
          excerpt: "แชร์ประสบการณ์เที่ยวญี่ปุ่นหน้าหนาว..."
        },
        {
          id: 3,
          title: "รวมร้านบุฟเฟ่ต์ทั่วกรุงเทพ อัพเดทล่าสุด 2025 ราคาไม่เกิน 499",
          author: "food_hunter",
          room: "Food",
          thumbnail: "https://picsum.photos/400/300?random=3",
          comments: 567,
          votes: 1432,
          timestamp: "2025-02-14T07:00:00Z",
          excerpt: "รวมร้านบุฟเฟ่ต์น่ากิน ราคาประหยัด..."
        }
      ],
      popular: [
        {
          id: 4,
          title: "วิธีประหยัดเงิน 100,000 ใน 3 เดือน ทำได้จริง!",
          author: "money_saver",
          room: "Finance",
          thumbnail: "https://picsum.photos/400/300?random=4",
          comments: 1234,
          votes: 3456,
          timestamp: "2025-02-14T06:15:00Z",
          excerpt: "แชร์เทคนิคการออมเงินแบบเห็นผลไว..."
        },
        {
          id: 5,
          title: "สอนทำผัดไทยกุ้งสด สูตรโบราณ หอมอร่อย ทำขายได้",
          author: "chef_thailand",
          room: "Food",
          thumbnail: "https://picsum.photos/400/300?random=5",
          comments: 432,
          votes: 987,
          timestamp: "2025-02-14T05:45:00Z",
          excerpt: "สูตรผัดไทยโบราณ พร้อมเทคนิคการทำ..."
        },
        {
          id: 6,
          title: "รีวิว Tesla Model Y 2025 หลังใช้งาน 3 เดือน ข้อดี-ข้อเสีย",
          author: "car_reviewer",
          room: "Automotive",
          thumbnail: "https://picsum.photos/400/300?random=6",
          comments: 678,
          votes: 1543,
          timestamp: "2025-02-14T05:15:00Z",
          excerpt: "รีวิวรถยนต์ไฟฟ้า Tesla Model Y..."
        }
      ],
      latest: [
        {
          id: 7,
          title: "แชร์ประสบการณ์ทำงาน Freelance รายได้แสน",
          author: "freelancer",
          room: "Job",
          thumbnail: "https://picsum.photos/400/300?random=7",
          comments: 567,
          votes: 1234,
          timestamp: "2025-02-14T04:15:00Z",
          excerpt: "เล่าประสบการณ์การเป็น Freelancer..."
        },
        {
          id: 8,
          title: "รวมคาเฟ่น่านั่ง ย่านทองหล่อ เปิดใหม่ 2025",
          author: "cafe_hopper",
          room: "Food",
          thumbnail: "https://picsum.photos/400/300?random=8",
          comments: 234,
          votes: 567,
          timestamp: "2025-02-14T03:45:00Z",
          excerpt: "แนะนำคาเฟ่เปิดใหม่ย่านทองหล่อ..."
        },
        {
          id: 9,
          title: "วิธีดูแลต้นไม้ในคอนโด ให้รอด แม้ไม่มีแดด",
          author: "plant_lover",
          room: "Home",
          thumbnail: "https://picsum.photos/400/300?random=9",
          comments: 345,
          votes: 789,
          timestamp: "2025-02-14T03:30:00Z",
          excerpt: "แชร์เทคนิคการดูแลต้นไม้ในคอนโด..."
        }
      ],
      trending: [
        {
          id: 10,
          title: "เปิดตัว iPhone 16 Pro Max ราคาเริ่มต้น 39,900 บาท",
          author: "tech_news",
          room: "Technology",
          thumbnail: "https://picsum.photos/400/300?random=10",
          comments: 2345,
          votes: 5678,
          timestamp: "2025-02-14T08:30:00Z",
          excerpt: "Apple เปิดตัว iPhone 16 Pro Max อย่างเป็นทางการ..."
        },
        {
          id: 11,
          title: "ข่าวด่วน! ค่าเงินบาทแข็งค่าสุดในรอบ 5 ปี",
          author: "finance_news",
          room: "Finance",
          thumbnail: "https://picsum.photos/400/300?random=11",
          comments: 1876,
          votes: 4321,
          timestamp: "2025-02-14T08:15:00Z",
          excerpt: "ค่าเงินบาทแข็งค่าขึ้นอย่างต่อเนื่อง..."
        },
        {
          id: 12,
          title: "BTS เปิดเส้นทางใหม่ สายสีม่วง เริ่มใช้ปลายปีนี้",
          author: "bts_update",
          room: "Transportation",
          thumbnail: "https://picsum.photos/400/300?random=12",
          comments: 1543,
          votes: 3456,
          timestamp: "2025-02-14T08:00:00Z",
          excerpt: "BTS เตรียมเปิดให้บริการสายสีม่วง..."
        }
      ],
      recommended: [
        {
          id: 13,
          title: "รีวิว 10 ร้านชาบูเปิดใหม่ย่านรัชดา น่าลอง 2025",
          author: "food_critic",
          room: "Food",
          thumbnail: "https://picsum.photos/400/300?random=13",
          comments: 876,
          votes: 2345,
          timestamp: "2025-02-14T07:45:00Z",
          excerpt: "พาชิมร้านชาบูเปิดใหม่ย่านรัชดา..."
        },
        {
          id: 14,
          title: "แนะนำ 5 คอร์สเรียนออนไลน์ฟรี พัฒนาทักษะ AI",
          author: "tech_educator",
          room: "Education",
          thumbnail: "https://picsum.photos/400/300?random=14",
          comments: 654,
          votes: 1987,
          timestamp: "2025-02-14T07:30:00Z",
          excerpt: "รวมคอร์สเรียน AI ฟรี จากมหาวิทยาลัยชั้นนำ..."
        },
        {
          id: 15,
          title: "วิธีปลูกผักสวนครัวในคอนโด ประหยัดค่าอาหาร",
          author: "urban_farmer",
          room: "Home",
          thumbnail: "https://picsum.photos/400/300?random=15",
          comments: 765,
          votes: 1876,
          timestamp: "2025-02-14T07:15:00Z",
          excerpt: "สอนปลูกผักสวนครัวในพื้นที่จำกัด..."
        }
      ],
      mostViewed: [
        {
          id: 16,
          title: "สรุปดราม่า! คดีฟ้องร้อง influencer ดัง",
          author: "drama_update",
          room: "Entertainment",
          thumbnail: "https://picsum.photos/400/300?random=16",
          comments: 4567,
          votes: 8765,
          timestamp: "2025-02-14T06:45:00Z",
          excerpt: "เกาะติดคดีฟ้องร้องที่กำลังเป็นที่สนใจ..."
        },
        {
          id: 17,
          title: "เตือนภัย! แก๊งคอลเซ็นเตอร์รูปแบบใหม่ 2025",
          author: "cybercrime_watch",
          room: "Crime",
          thumbnail: "https://picsum.photos/400/300?random=17",
          comments: 3456,
          votes: 7654,
          timestamp: "2025-02-14T06:30:00Z",
          excerpt: "วิธีป้องกันตัวจากแก๊งคอลเซ็นเตอร์..."
        },
        {
          id: 18,
          title: "ราคาทอง พุ่งทะลุ 40,000 บาท ทำสถิติใหม่",
          author: "gold_trader",
          room: "Finance",
          thumbnail: "https://picsum.photos/400/300?random=18",
          comments: 2345,
          votes: 5432,
          timestamp: "2025-02-14T06:15:00Z",
          excerpt: "วิเคราะห์ทิศทางราคาทองในปี 2025..."
        }
      ],
      hotTopics: [
        {
          id: 19,
          title: "เปิดโผ 20 มหาวิทยาลัยไทย ติดอันดับโลก 2025",
          author: "edu_news",
          room: "Education",
          thumbnail: "https://picsum.photos/400/300?random=19",
          comments: 1987,
          votes: 4321,
          timestamp: "2025-02-14T05:45:00Z",
          excerpt: "จัดอันดับมหาวิทยาลัยไทยระดับโลก..."
        },
        {
          id: 20,
          title: "รีวิว ร้านอาหารมิชลินสตาร์ เปิดใหม่ในกรุงเทพ",
          author: "food_expert",
          room: "Food",
          thumbnail: "https://picsum.photos/400/300?random=20",
          comments: 1654,
          votes: 3987,
          timestamp: "2025-02-14T05:30:00Z",
          excerpt: "พาชมร้านอาหารระดับมิชลินสตาร์..."
        },
        {
          id: 21,
          title: "สอนลงทุนคริปโต สำหรับมือใหม่ปี 2025",
          author: "crypto_guru",
          room: "Finance",
          thumbnail: "https://picsum.photos/400/300?random=21",
          comments: 1432,
          votes: 3654,
          timestamp: "2025-02-14T05:15:00Z",
          excerpt: "แนะนำการลงทุนคริปโตเคอเรนซี..."
        }
      ]
    }
  });
};
