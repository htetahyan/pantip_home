'use client'
import Banner from '@/components/home/Banner'
import Announce from '@/components/home/Announce'
import RoomSelection from '@/components/home/RoomSelection'
import React from 'react'
import Highlight from '@/components/home/HightLight'
import FeaturedPosts from '@/components/home/FeaturedPosts'
import SideNavigation from '@/components/home/SideNavigation'

const page = () => {
  return (
    <div className='min-h-screen bg-[--background]'>
      <Banner />
      <RoomSelection />
      <main className='max-w-screen-2xl mx-auto py-6 sm:py-8'>
        <div className='space-y-2 lg:space-y-8 w-full'>
          <section>
            <h2 className='text-[--foreground] font-semibold text-xl sm:text-2xl mb-4 px-4 sm:px-6'>
              Announcements
            </h2>
            <Announce />
          </section>
          
          <section className='w-full'>
            <h2 className='text-[--foreground] font-semibold text-xl sm:text-2xl mb-4 px-4 sm:px-6'>
              Highlights
            </h2>
            <div className='px-4 sm:px-6'>
              <Highlight/>
            </div>
          </section>

          <div className='grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 px-4 sm:px-6'>
            <aside className='hidden md:block'>
              <SideNavigation />
            </aside>
            <section>
              <h2 className='text-[--foreground] font-semibold text-xl sm:text-2xl mb-4'>
                Featured Posts
              </h2>
              <FeaturedPosts />
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}

export default page
