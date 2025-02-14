'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { Skeleton } from '@heroui/react'

interface Room {
  id: number
  name: string
  name_en: string
  slug: string
  description: string
  link_url: string
  room_icon_url: string
  is_pinned: boolean
  pinned_time: string | null
  order: number | null
}

const RoomSelection = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const { data, isLoading } = useQuery<{ success: boolean; data: Room[] }>({
    queryKey: ['rooms'],
    queryFn: async () => {
      const response = await fetch('/api/home/rooms')
      return response.json()
    }
  })

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

  if (isLoading) {
    return (
      <div className=" z-40 bg-white border-b border-[--border] py-3 sm:py-4">
        <div className="relative px-4 sm:px-6">
          <div className="flex gap-6 sm:gap-8 px-8">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="flex flex-col items-center min-w-14 sm:min-w-16">
                <Skeleton className="w-14 h-14 sm:w-16 sm:h-16 rounded-full mb-2" />
                <Skeleton className="h-4 w-16" />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className=" z-40  border-b border-[--border] py-3 sm:py-4 ">
      <div className="relative px-4 sm:px-6">
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-white border border-[--border] rounded-full shadow-md text-[--foreground] hover:scale-110 transition-transform"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-white border border-[--border] rounded-full shadow-md text-[--foreground] hover:scale-110 transition-transform"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
        <div
          ref={scrollRef}
          className="overflow-x-auto flex gap-6 sm:gap-8 scrollbar-hide px-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <style jsx global>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          <div className="flex gap-6 sm:gap-8 px-4">
            {data?.data.map((room) => (
              <Link
                key={room.id}
                href={room.link_url}
                className="flex flex-col items-center min-w-14 sm:min-w-16 group"
              >
                <div className="w-5 h-5 sm:w-6 sm:h-6 mb-1.5 sm:mb-2 flex items-center justify-center">
                  <Image 
                    src={room.room_icon_url} 
                    alt={room.name}
                    width={32}
                    height={32}
                    className="object-contain w-full h-full bg-black group-hover:opacity-80 transition-opacity"
                  />
                </div>
                <span className="text-[10px] sm:text-xs text-[--secondary] group-hover:text-[--foreground] transition-colors whitespace-nowrap">
                  {room.name}
                </span>
                <div className="h-0.5 w-full mt-1.5 sm:mt-2 bg-transparent group-hover:bg-[--foreground] transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoomSelection
