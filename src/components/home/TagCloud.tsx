'use client'

import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { Skeleton } from '@heroui/react'

interface TagItem {
  name: string
  slug: string
  pageview: number
  topic_count: number
  follow_count: number
}

const TagCloud = () => {
  const { data, isLoading } = useQuery<{ success: boolean; data: TagItem[] }>({
    queryKey: ['tag-hits'],
    queryFn: async () => {
      const response = await fetch('/api/home/tags')
      return response.json()
    }
  })

  if (isLoading) {
    return (
      <div className="space-y-2 p-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i}>
            <Skeleton className="h-8 w-24" />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="p-4">
      <div className="flex flex-wrap gap-2">
        {data?.data.map((tag) => (
          <Link
            key={tag.slug}
            href={`/tag/${tag.slug}`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-full bg-[--card] border border-[--border] text-[--secondary] hover:text-[--foreground] hover:border-[--foreground] transition-colors"
          >
            <span>#{tag.name}</span>
            <span className="text-[10px] text-[--muted] bg-[--card-hover] px-1.5 py-0.5 rounded-full">
              {tag.topic_count > 999 
                ? `${(tag.topic_count / 1000).toFixed(1)}K` 
                : tag.topic_count}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default TagCloud
