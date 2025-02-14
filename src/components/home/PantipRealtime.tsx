'use client'

import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'
import { MessageSquare } from 'lucide-react'
import { Skeleton } from '@heroui/react'

interface Topic {
  topic_id: number
  topic_type: number
  title: string
  thumbnail_url?: string
  views_count: number
  comments_count: number
  votes_count: number
  author: {
    id: number
    name: string
    avatar: {
      large: string
      medium: string
      small: string
    }
    slug: string
  }
  created_time: string
  tags: Array<{
    name: string
    slug: string
  }>
  category: string
}

interface TagData {
  tag_id: number
  tag_name: string
  slug: string
  topic_count: number
  follow_count: number
  is_followed: boolean
  type: string
  topics: Topic[]
}

const PantipRealtime = () => {
  const { data, isLoading } = useQuery<{ data: TagData[] }>({
    queryKey: ['suggest-topics'],
    queryFn: async () => {
      const response = await fetch('/api/home/realtime')
      return response.json()
    }
  })

  if (isLoading) {
    return (
      <div className="bg-[#1B1B2F] rounded-lg overflow-hidden">
        <div className="bg-[#2B2B3F] p-4">
          <Skeleton className="h-6 w-40 mb-4" />
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-3 w-1/4" />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-[#1B1B2F] rounded-lg overflow-hidden">
      <div className="bg-[#2B2B3F] p-4">
        <h2 className="text-amber-400 font-bold">Pantip Pick</h2>
        <p className="text-xs text-gray-400">Quality posts selected by the Pantip team</p>
      </div>
      <div className="divide-y divide-gray-700/50">
        {data?.data.flatMap(tag => tag.topics).map((topic) => (
          <div key={topic.topic_id} className="hover:bg-[#2B2B3F]/50 transition-colors">
            <Link href={`/topic/${topic.topic_id}`} className="block p-4">
              <div className="flex gap-3">
                {topic.thumbnail_url && (
                  <div className="relative w-16 h-16 flex-shrink-0 rounded overflow-hidden">
                    <Image
                      src={topic.thumbnail_url}
                      alt={topic.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    {topic.topic_type === 1 && (
                      <span className="text-amber-400 text-sm">❓</span>
                    )}
                    {topic.topic_type === 3 && (
                      <span className="text-blue-400 text-sm">✨</span>
                    )}
                    <h3 className="text-sm text-white">{topic.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {topic.tags.map((tag, i) => (
                      <Link 
                        key={i} 
                        href={`/tag/${encodeURIComponent(tag.slug)}`}
                        className="text-xs text-blue-400 hover:underline"
                      >
                        {tag.name}
                      </Link>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <Link href={topic.author.slug} className="hover:text-white">
                      {topic.author.name}
                    </Link>
                    <span>{new Date(topic.created_time).toLocaleTimeString('th-TH', {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}</span>
                    <div className="flex items-center gap-1">
                      <MessageSquare className="w-3 h-3" />
                      {topic.comments_count}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PantipRealtime
