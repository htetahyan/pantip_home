'use client'

import Link from 'next/link'
import {
  Hash,
  Home,
  LogOut,
 
  Settings,
  ShoppingBag,
  Star,
  User,
  Users,
  Heart,
  Bell,
  Search,
 
  BookMarked,
  PenSquare,
  ChevronRight,
  MessageCircle,
  ImageIcon,
  Film,
  HelpCircle,
  UsersRound,
} from 'lucide-react'
import PantipMarket from './PantipMarket'
import TagCloud from './TagCloud'
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@heroui/react";
import Image from "next/image";
import { useState } from "react";

interface SidebarContent {
  name: string;
  weight: number;
  image_url: string[];
  post_url: string;
}

interface SidebarResponse {
  success: boolean;
  data: SidebarContent[];
}

interface Club {
  id: number;
  name: string;
  slug: string;
  is_official: boolean;
  is_active: boolean;
  has_icon: boolean;
}

interface ClubsResponse {
  success: boolean;
  data: Club[];
  has_club: boolean;
  count: number;
}

const menuItems = [
  { name: 'หน้าแรก', icon: Home, href: '/' },
  { name: 'ไทมไลน์', icon: Users, href: '/timeline' },
  { name: 'สำรวจ', icon: Search, href: '/explore' },
  { name: 'เขียนกระทู้', icon: PenSquare, href: '/new-topic' },
  { name: 'บุ๊กมาร์ก', icon: BookMarked, href: '/bookmarks' },
  { name: 'แจ้งเตือน', icon: Bell, href: '/notifications' },
  { name: 'กระทู้ของฉัน', icon: MessageCircle, href: '/my-topics' },
  { name: 'แกลเลอรี่', icon: ImageIcon, href: '/gallery' },
  { name: 'มัลติมีเดีย', icon: Film, href: '/multimedia' },
  { name: 'คลับ', icon: Users, href: '/clubs' },
  { name: 'ของรางวัล', icon: Star, href: '/rewards' },
  { name: 'เพื่อน', icon: Users, href: '/friends' },
  { name: 'รายการโปรด', icon: Heart, href: '/favorites' },
  { name: 'ห้องที่ติดตาม', icon: Star, href: '/followed-rooms' },
]

const bottomMenuItems = [
  { name: 'โปรไฟล์', icon: User, href: '/profile' },
  { name: 'ตั้งค่า', icon: Settings, href: '/settings' },
  { name: 'ช่วยเหลือ', icon: HelpCircle, href: '/help' },
  { name: 'ออกจากระบบ', icon: LogOut, href: '/logout' },
]

export default function SideNavigation() {
  const [showAllClubs, setShowAllClubs] = useState(false);
  
  const { data: sidebarContent, isLoading: isSidebarLoading } = useQuery<SidebarResponse>({
    queryKey: ["sidebarContent"],
    queryFn: async () => {
      const response = await fetch("/api/home/sidebar");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

  const { data: clubsData, isLoading: isClubsLoading } = useQuery<ClubsResponse>({
    queryKey: ["clubs"],
    queryFn: async () => {
      const response = await fetch("/api/home/clubs");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

  const displayedClubs = showAllClubs ? clubsData?.data : clubsData?.data.slice(0, 5);

  return (
    <div className="space-y-4">
      {/* Menu Navigation */}
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

      {/* Clubs Section */}
      <div className="rounded-lg border border-[--border] bg-[--card]">
        <div className="p-4 border-b border-[--border]">
          <div className="flex items-center gap-2 text-[--foreground]">
            <UsersRound className="w-5 h-5" />
            <h2 className="font-medium">คลับยอดนิยม</h2>
          </div>
        </div>
        <div className="p-4">
          {isClubsLoading ? (
            <div className="space-y-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <Skeleton key={i} className="h-8 w-full" />
              ))}
            </div>
          ) : (
            <div className="space-y-2">
              {displayedClubs?.map((club) => (
                <Link
                  key={club.id}
                  href={`/club/${club.slug}`}
                  className="flex items-center gap-2 px-3 py-2 text-[--secondary] hover:text-[--foreground] hover:bg-[--card-hover] rounded-lg transition-colors"
                >
                  <span className="text-sm">{club.name}</span>
                  {club.is_official && (
                    <span className="text-xs bg-blue-500 text-white px-1.5 py-0.5 rounded">
                      Official
                    </span>
                  )}
                </Link>
              ))}
              {clubsData?.data.length! > 5 && (
                <button
                  onClick={() => setShowAllClubs(!showAllClubs)}
                  className="w-full mt-2 px-3 py-2 text-sm text-[--secondary] hover:text-[--foreground] hover:bg-[--card-hover] rounded-lg transition-colors flex items-center justify-center gap-1"
                >
                  {showAllClubs ? "แสดงน้อยลง" : "แสดงทั้งหมด"}
                  <ChevronRight className={`w-4 h-4 transition-transform ${showAllClubs ? "rotate-90" : ""}`} />
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Sidebar Content */}
      <div className="rounded-lg border border-[--border] bg-[--card]">
        <div className="p-4 border-b border-[--border]">
          <div className="flex items-center gap-2 text-[--foreground]">
            <Star className="w-5 h-5" />
            <h2 className="font-medium">กิจกรรมพิเศษ</h2>
          </div>
        </div>
        <div className="p-4 space-y-4">
          {isSidebarLoading ? (
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="rounded-lg overflow-hidden">
                  <Skeleton className="h-40 w-full" />
                  <div className="mt-2">
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-3/4" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            sidebarContent?.data.map((item) => (
              <Link
                key={item.post_url}
                href={item.post_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="rounded-lg overflow-hidden hover:opacity-90 transition-opacity">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={item.image_url[1]}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="mt-2">
                    <h3 className="text-sm font-medium line-clamp-2 hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>

      {/* Trending Tags */}
      <div className="rounded-lg border border-[--border] bg-[--card]">
        <div className="p-4 border-b border-[--border]">
          <div className="flex items-center gap-2 text-[--foreground]">
            <Hash className="w-5 h-5" />
            <h2 className="font-medium">Trending Tags</h2>
          </div>
        </div>
        <TagCloud />
      </div>

      {/* Pantip Market */}
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
  );
}
