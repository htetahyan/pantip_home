'use client'
import { Button } from '@heroui/react'
import React from 'react'

const announcements = [
  {
    tag: "Highlight",
    title: "วาเลนไทน์นี้...มีของขวัญให้คนที่คุณแล้วหรือยัง?",
    description: "Pantip x Potico ชวนแลกโค้ดส่วนลด 250 บาท ใช้เพียง 99 พอยต์เท่านั้น ช้าหมดอดนะ!",
  },
  {
    tag: "Podcast",
    icon: "🎧",
    title: "Pantip Daily Podcast",
    description: "3 อันดับกระทู้ฮิตบนพันทิป! ประจำวันที่ 9 กุมภาพันธ์ 📱",
  },
  {
    tag: "Activity",
    title: "Pantip Point 💰",
    description: "วาเลนไทน์สายลับ น้องเพิ่มคนไหนโดนใจคุณ? 💝",
  }
]

const Announce = () => {
  return (
    <div className='w-full bg-[#2D2B3D] p-4'>
      <h2 className='text-lg font-semibold mb-4'>Announce</h2>
      <div className='space-y-3'>
        {announcements.map((announcement, index) => (
          <Button
            key={index}
            variant='light'
            className='w-full flex items-start gap-3 p-3 text-left bg-[#353156] hover:bg-[#3D3960] min-h-[60px]'
          >
            <div className='flex-shrink-0 px-2 py-1 text-xs rounded bg-orange-500 text-white uppercase'>
              {announcement.tag}
            </div>
            <div className='flex-1'>
              <div className='flex items-center gap-2'>
                {announcement.icon && <span>{announcement.icon}</span>}
                <span className='text-sm font-medium text-yellow-400'>{announcement.title}</span>
              </div>
              <p className='text-sm text-gray-300 mt-1'>{announcement.description}</p>
            </div>
          </Button>
        ))}
      </div>
    </div>
  )
}

export default Announce 