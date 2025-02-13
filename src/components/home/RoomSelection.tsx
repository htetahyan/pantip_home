'use client'

import {
  Utensils,
  Lightbulb,
  Image,
  Globe,
  Film,
  Home,
  Users,
  Cat,
  MonitorPlay,
  Globe2,
  Flower2,
  Coins,
  Camera,
  Gamepad2,
  Globe2 as GlobeAlt,
  Music4,
  Users2,
  MonitorSmartphone,
  Wine,
  Heart,
  SmilePlus,
  Smartphone
} from 'lucide-react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef } from 'react'

const rooms = [
  { name: 'กินหรา', icon: Utensils, href: '/forum/food' },
  { name: 'กล้อง', icon: Camera, href: '/forum/camera' },
  { name: 'การ์ตูน', icon: Lightbulb, href: '/forum/cartoon' },
  { name: 'แกลเลอรี่', icon: Image, href: '/forum/gallery' },
  { name: 'จตุจักร', icon: Globe, href: '/forum/jatujak' },
  { name: 'เฉลิมไทย', icon: Film, href: '/forum/chalermthai' },
  { name: 'ชานเรือน', icon: Home, href: '/forum/home' },
  { name: 'ดีไอวายคลับ', icon: Users, href: '/forum/diy' },
  { name: 'ถนนนักเขียน', icon: Cat, href: '/forum/writer' },
  { name: 'บางขุนพรหม', icon: MonitorPlay, href: '/forum/bangkhunprom' },
  { name: 'พรรคมาลี', icon: Globe2, href: '/forum/party' },
  { name: 'ภูมิภาค', icon: Flower2, href: '/forum/region' },
  { name: 'กรีนโซน', icon: Coins, href: '/forum/greenzone' },
  { name: 'แก็ดเจ็ต', icon: Gamepad2, href: '/forum/gadget' },
  { name: 'ไกลบ้าน', icon: GlobeAlt, href: '/forum/abroad' },
  { name: 'เฉลิมกรุง', icon: Music4, href: '/forum/chalermkrung' },
  { name: 'ชายคา', icon: Users2, href: '/forum/family' },
  { name: 'วีดีโอคอมเล็ก', icon: MonitorSmartphone, href: '/forum/videocompact' },
  { name: 'เครื่องดื่ม', icon: Wine, href: '/forum/drinks' },
  { name: 'ชายรัก', icon: Heart, href: '/forum/gay' },
  { name: 'พันทิป', icon: SmilePlus, href: '/forum/pantip' },
  { name: 'มาบุญครอง', icon: Smartphone, href: '/forum/mbk' }
]

const RoomSelection = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return
    const scrollAmount = 200
    const newScrollLeft = scrollRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount)
    scrollRef.current.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    })
  }

  return (
    <div className="relative bg-[#1B1B2F] rounded-lg p-4">
      <h2 className="text-amber-400 font-bold mb-4">เลือกห้อง</h2>
      <div className="relative">
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-black/50 hover:bg-black/70 rounded-full text-white"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div
          ref={scrollRef}
          className="overflow-x-auto flex gap-2 scrollbar-hide relative"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <style jsx global>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          <div className="flex gap-2">
            {rooms.map((room) => {
              const Icon = room.icon
              return (
                <Link
                  key={room.name}
                  href={room.href}
                  className="flex flex-col items-center justify-center w-[76px] h-[76px] bg-[#2B2B3F] hover:bg-[#353156] rounded p-2 transition-colors flex-shrink-0"
                >
                  <Icon className="w-6 h-6 text-gray-300 mb-1" />
                  <span className="text-xs text-gray-300 text-center leading-tight">
                    {room.name}
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-black/50 hover:bg-black/70 rounded-full text-white"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}

export default RoomSelection
