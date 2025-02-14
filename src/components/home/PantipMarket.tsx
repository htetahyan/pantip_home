'use client'

import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import Image from 'next/image'
import { Skeleton } from '@heroui/react'

interface MarketItem {
  title: string
  thumbnail_url: string
  url: string
  group_name: string
  group_url: string
  group_title: string
}

const PantipMarket = () => {
  const { data, isLoading } = useQuery<{ success: boolean; data: MarketItem[] }>({
    queryKey: ['market-items'],
    queryFn: async () => {
      const response = await fetch('/api/home/market')
      return response.json()
    }
  })

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i}>
            <Skeleton className="aspect-[4/3] rounded-lg mb-3" />
            <Skeleton className="h-4 w-3/4 mb-2" />
            <Skeleton className="h-3 w-1/2" />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-4 p-4">
      {data?.data.slice(0, 3).map((item) => (
        <Link
          key={item.url}
          href={item.url}
          className="block group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-2">
            <Image
              src={item.thumbnail_url}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h3 className="text-sm line-clamp-2 group-hover:text-[--primary] transition-colors">
            {item.title}
          </h3>
          <div className="mt-1">
            <Link
              href={item.group_url}
              className="text-xs text-[--primary] hover:underline"
            >
              {item.group_name}
            </Link>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default PantipMarket
