'use client'

import { useInfiniteQuery } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'
import { MessageSquare, ThumbsUp } from 'lucide-react'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

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

interface TopicsResponse {
  success: boolean
  data: Topic[]
  next_id: number | null
  has_next: boolean
  ranking_time: number
}

const InfiniteTopics = () => {
  const { ref, inView } = useInView()

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status
  } = useInfiniteQuery<TopicsResponse>({
    queryKey: ['infinite-topics'],
    queryFn: async ({ pageParam = 1 }) => {
      const response = await fetch(`/api/home/suggest?page=${pageParam}`, {
        method: 'POST'
      })
      return response.json()
    },
    getNextPageParam: (lastPage) =>
      lastPage.has_next ? lastPage.next_id : undefined,
    initialPageParam: 1
  })

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [inView, fetchNextPage, hasNextPage, isFetchingNextPage])

  if (status === 'pending') {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-[#1B1B2F] rounded-lg p-4">
            <div className="space-y-4">
              {[1, 2].map((j) => (
                <div key={j} className="flex gap-3">
                  <div className="w-16 h-16 bg-gray-800 rounded flex-shrink-0 animate-pulse"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-gray-800 w-3/4 rounded animate-pulse"></div>
                    <div className="h-3 bg-gray-800 w-1/4 rounded animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {data?.pages.map((page, i) => (
        <div key={i} className="bg-[#1B1B2F] rounded-lg overflow-hidden">
          <div className="divide-y divide-gray-700/50">
            {page.data.map((topic) => (
              <div
                key={topic.topic_id}
                className="hover:bg-[#2B2B3F]/50 transition-colors"
              >
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
                        <Link
                          href={topic.author.slug}
                          className="hover:text-white"
                        >
                          {topic.author.name}
                        </Link>
                        <span>
                          {new Date(topic.created_time).toLocaleTimeString(
                            'th-TH',
                            {
                              hour: '2-digit',
                              minute: '2-digit'
                            }
                          )}
                        </span>
                        <div className="flex items-center gap-1">
                          <MessageSquare className="w-3 h-3" />
                          {topic.comments_count}
                        </div>
                        <div className="flex items-center gap-1">
                          <ThumbsUp className="w-3 h-3" />
                          {topic.votes_count}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
      {hasNextPage && (
        <div
          ref={ref}
          className="flex justify-center p-4 bg-[#1B1B2F] rounded-lg"
        >
          <div className="w-6 h-6 border-2 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  )
}

export default InfiniteTopics
