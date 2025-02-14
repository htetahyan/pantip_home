'use client'

import Link from 'next/link'
import {
  Home,
  MessageCircle,
  Image as ImageIcon,
  Film,
  Users,
  Heart,
  Star,
  Settings,
  HelpCircle,
  LogOut,
  ShoppingBag,
  Hash
} from 'lucide-react'
import PantipMarket from './PantipMarket'
import TagCloud from './TagCloud'

const menuItems = [
  { name: 'หน้าแรก', icon: Home, href: '/' },
  { name: 'กระทู้ของฉัน', icon: MessageCircle, href: '/my-topics' },
  { name: 'แกลเลอรี่', icon: ImageIcon, href: '/gallery' },
  { name: 'มัลติมีเดีย', icon: Film, href: '/multimedia' },
  { name: 'เพื่อน', icon: Users, href: '/friends' },
  { name: 'รายการโปรด', icon: Heart, href: '/favorites' },
  { name: 'ห้องที่ติดตาม', icon: Star, href: '/followed-rooms' },
]

const bottomMenuItems = [
  { name: 'ตั้งค่า', icon: Settings, href: '/settings' },
  { name: 'ช่วยเหลือ', icon: HelpCircle, href: '/help' },
  { name: 'ออกจากระบบ', icon: LogOut, href: '/logout' },
]

const SideNavigation = () => {
  return (
    <div className="space-y-4">
      <div className="rounded-lg border border-[--border] bg-[--card]">
        <nav>
          <div className="p-4 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-3 px-3 py-2 text-[--secondary] hover:text-[--foreground] hover:bg-[--card-hover] rounded-lg transition-colors"
              >
                <item.icon className="w-5 h-5" />
                <span className="text-sm">{item.name}</span>
              </Link>
            ))}
          </div>

          <div className="border-t border-[--border]" />

          <div className="p-4 space-y-1">
            {bottomMenuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-3 px-3 py-2 text-[--secondary] hover:text-[--foreground] hover:bg-[--card-hover] rounded-lg transition-colors"
              >
                <item.icon className="w-5 h-5" />
                <span className="text-sm">{item.name}</span>
              </Link>
            ))}
          </div>
        </nav>
      </div>

      <div className="rounded-lg border border-[--border] bg-[--card]">
        <div className="p-4 border-b border-[--border]">
          <div className="flex items-center gap-2 text-[--foreground]">
            <Hash className="w-5 h-5" />
            <h2 className="font-medium">Trending Tags</h2>
          </div>
        </div>
        <TagCloud />
      </div>

      <div className="rounded-lg border border-[--border] bg-[--card]">
        <div className="p-4 border-b border-[--border]">
          <div className="flex items-center gap-2 text-[--foreground]">
            <ShoppingBag className="w-5 h-5" />
            <h2 className="font-medium">Pantip Market</h2>
          </div>
        </div>
        <PantipMarket />
      </div>
    </div>
  )
}

export default SideNavigation
