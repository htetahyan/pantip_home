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
 
  Camera,

 
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
  { name: 'กินหรา', icon: Utensils, href: '/forum/food' },
  { name: 'กล้อง', icon: Camera, href: '/forum/camera' },
  { name: 'การ์ตูน', icon: Lightbulb, href: '/forum/cartoon' },
  { name: 'แกลเลอรี่', icon: Image, href: '/forum/gallery' },
  { name: 'จตุจักร', icon: Globe, href: '/forum/jatujak' }, { name: 'กินหรา', icon: Utensils, href: '/forum/food' },
  { name: 'กล้อง', icon: Camera, href: '/forum/camera' },
  { name: 'การ์ตูน', icon: Lightbulb, href: '/forum/cartoon' },
  { name: 'แกลเลอรี่', icon: Image, href: '/forum/gallery' },
  { name: 'จตุจักร', icon: Globe, href: '/forum/jatujak' },
]

const RoomSelection = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current
      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  return (
    <div className='bg-transparent'>
      <div className='relative'>
        <button
          onClick={() => scroll('left')}
          className='absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center text-gray-300 hover:text-white'
        >
          <ChevronLeft className='w-6 h-6' />
        </button>
        <button
          onClick={() => scroll('right')}
          className='absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center text-gray-300 hover:text-white'
        >
          <ChevronRight className='w-6 h-6' />
        </button>
        <div
          ref={scrollRef}
          className='overflow-x-auto flex gap-2 scrollbar-hide px-8'
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <style jsx global>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          <div className='flex gap-2'>
            {rooms.map((room) => {
              const Icon = room.icon
              return (
                <Link
                  key={room.name}
                  href={room.href}
                  className='flex flex-col items-center justify-center w-[52px] h-[52px] bg-[#1B1B2F] hover:bg-[#2B2B3F] rounded-lg p-2 transition-colors flex-shrink-0'
                >
                  <Icon className='w-5 h-5 text-gray-300 mb-1' />
                  <span className='text-[10px] text-gray-300 text-center leading-none'>
                    {room.name}
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoomSelection
