'use client'
import Banner from '@/components/home/Banner'
import Announce from '@/components/home/Announce'
import RoomSelection from '@/components/home/RoomSelection'
import { SkipForward } from 'lucide-react'
import React from 'react'
import Highlight from '@/components/home/HightLight'
import FeaturedPosts from '@/components/home/FeaturedPosts'
import Link from 'next/link'
import { useQuery } from '@tanstack/react-query'

interface Tag {
  name: string
  slug: string
  pageview: number
  topic_count: number
  follow_count: number
}

interface TagResponse {
  success: boolean
  data: Tag[]
  ranking_time: number
  next_id: number
}

const PopularTags = () => {
  const { data, isLoading } = useQuery<TagResponse>({
    queryKey: ['popular-tags'],
    queryFn: async () => {
      const response = await fetch('/api/home/tags')
      return response.json()
    }
  })

  if (isLoading) {
    return (
      <div className='bg-transparent'>
        <h2 className='text-amber-400 font-bold mb-2'>Popular tags</h2>
        <div className='space-y-2'>
          {[1, 2, 3].map((i) => (
            <div key={i} className='h-8 bg-gray-800/50 rounded animate-pulse'></div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className='bg-transparent'>
      <h2 className='text-amber-400 font-bold mb-2'>Popular tags</h2>
      <div className='flex flex-col space-y-2'>
        {data?.data.slice(0, 3).map((tag) => (
          <Link
            key={tag.slug}
            href={`/tag/${encodeURIComponent(tag.slug)}`}
            className='py-2 px-3 bg-[#1B1B2F] hover:bg-[#2B2B3F] rounded-lg transition-colors'
          >
            <div className='text-sm text-gray-300 mb-1'>
              {tag.name}
            </div>
            <div className='flex flex-wrap items-center gap-2 text-xs text-gray-500'>
              <span>{tag.topic_count.toLocaleString()} topics</span>
              <span>•</span>
              <span>{tag.follow_count.toLocaleString()} followers</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

const page = () => {
  return (
    <div className='min-h-screen bg-[#13132B]'>
      <Banner />
      <main className='px-4'>
        <div className='flex items-center gap-2 py-3 text-gray-300'>
          <SkipForward className='w-5 h-5 flex-shrink-0' />
          <span className='text-sm'>หน้าแรกพันทิป</span>
        </div>
        <div className='space-y-4 w-[90vw] '>
          <Announce />
          <PopularTags />
          <RoomSelection />
          <Highlight/>
          <FeaturedPosts />
        </div>
      </main>
    </div>
  )
}

export default page
