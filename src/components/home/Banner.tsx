'use client'
import React from 'react'
import Link from 'next/link'
import { Menu, Search, User } from 'lucide-react'
import { Input } from '@heroui/react'

const Banner = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[--border]">
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
        {/* Logo */}
        <Link href="/" className="text-[--primary] font-bold text-xl sm:text-2xl">
          PANTIP
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex items-center gap-4 px-4 sm:px-6 py-2 border border-[--border] rounded-full hover:shadow-md transition-shadow cursor-pointer">
          <Input placeholder="type something..." className="outline-none" />
          <div className="bg-[--primary] p-2 rounded-full">
            <Search className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* Mobile Search */}
        <div className="flex md:hidden items-center gap-2 px-3 py-2 border border-[--border] rounded-full hover:shadow-md transition-shadow">
          <Search className="w-4 h-4" />
          <div>
            <div className="text-xs sm:text-sm font-medium">Anywhere</div>
            <div className="text-[10px] sm:text-xs text-[--secondary]">Any week • Add guests</div>
          </div>
        </div>

        {/* User Menu */}
        <div className="flex items-center gap-2 sm:gap-4">
          <Link href="/host" className="hidden md:block text-sm hover:bg-[--card-hover] px-4 py-2 rounded-full transition-colors">
            Pantip your home
          </Link>
          <button className="p-2 sm:p-3 hover:bg-[--card-hover] rounded-full transition-colors">
            <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button className="flex items-center gap-2 sm:gap-3 p-1.5 sm:p-2 border border-[--border] rounded-full hover:shadow-md transition-shadow">
            <Menu className="w-3 h-3 sm:w-4 sm:h-4" />
            <User className="w-5 h-5 sm:w-6 sm:h-6 text-[--secondary]" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Banner
