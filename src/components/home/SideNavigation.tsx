'use client'

import { Home, Rss, ThumbsUp, Compass, Gift, FileText } from 'lucide-react'
import Link from 'next/link'

const menuItems = [
  {
    title: 'Home page',
    icon: Home,
    href: '/'
  },
  {
    title: 'My Feed',
    icon: Rss,
    href: '/feed'
  },
  {
    title: 'Pantip Pick',
    icon: ThumbsUp,
    href: '/pick'
  },
  {
    title: 'Pantip Hitz',
    icon: Gift,
    href: '/hitz'
  },
  {
    title: 'Explore',
    icon: Compass,
    href: '/explore'
  },
  {
    title: 'Redeem points',
    icon: Gift,
    href: '/points'
  },
  {
    title: 'Pantip activities',
    icon: FileText,
    href: '/activities'
  }
]

const SideNavigation = () => {
  return (
    <div className="w-64 bg-[#1B1B2F] h-screen fixed left-0 top-14 p-4">
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="flex items-center gap-3 px-4 py-2 text-gray-300 hover:bg-[#2B2B3F] rounded-lg transition-colors"
          >
            <item.icon className="w-5 h-5" />
            <span className="text-sm">{item.title}</span>
          </Link>
        ))}
      </nav>
      <div className="mt-8 space-y-2 text-xs text-gray-400">
        <Link href="/rules" className="block hover:text-gray-300">
          Rules, regulations and etiquette
        </Link>
        <Link href="/guidelines" className="block hover:text-gray-300">
          Posting Guidelines
        </Link>
        <Link href="/privacy" className="block hover:text-gray-300">
          Privacy Policy
        </Link>
      </div>
      <div className="mt-4 text-xs text-gray-500">
        © 2025 Internet Marketing co., ltd.
      </div>
    </div>
  )
}

export default SideNavigation
