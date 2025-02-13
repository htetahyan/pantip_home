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
      <div className='bg-[#1B1B2F] rounded-lg p-4'>
        <h2 className='text-amber-400 font-bold mb-2'>Popular tags</h2>
        <div className='space-y-2'>
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className='h-8 bg-gray-800 rounded animate-pulse'></div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className='bg-[#1B1B2F] rounded-lg p-4'>
      <h2 className='text-amber-400 font-bold mb-2'>Popular tags</h2>
      <div className='flex flex-col divide-y divide-gray-800'>
        {data?.data.map((tag) => (
          <Link
            key={tag.slug}
            href={`/tag/${encodeURIComponent(tag.slug)}`}
            className='py-2 hover:bg-[#2B2B3F] rounded transition-colors group px-2'
          >
            <div className='text-sm text-gray-300 group-hover:text-white mb-1'>
              {tag.name}
            </div>
            <div className='flex items-center gap-3 text-xs text-gray-500'>
              <span>{tag.pageview.toLocaleString()} views</span>
              <span>{tag.topic_count.toLocaleString()} topics</span>
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
      <main>
        <div className='w-full flex p-2 px-4 lg:p-4 lg:px-16 bg-[#353156] items-center justify-start gap-2'>
          <SkipForward className='w-5 h-5 flex-shrink-0 text-gray-300' />
          <span className='text-sm text-gray-300'>หน้าแรกพันทิป</span>
        </div>
        <div className='flex gap-4 px-4 mx-auto max-w-7xl'>
          <div className='flex-1 max-w-[800px] py-4 space-y-4'>
            <Announce />
            <RoomSelection />
            <Highlight/>
           {/*  <TopicList /> */}
            <FeaturedPosts />
          </div>
          <div className='w-80 py-4 shrink-0'>
            <div className='space-y-4 sticky top-4'>
              <PopularTags />
              <div className='bg-[#1B1B2F] rounded-lg p-4'>
                <h2 className='text-amber-400 font-bold mb-2'>Affiliate sites</h2>
                <div className='space-y-2'>
                  <div className='w-full h-8 bg-gray-800 rounded'></div>
                  <div className='w-full h-8 bg-gray-800 rounded'></div>
                  <div className='w-full h-8 bg-gray-800 rounded'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default page
