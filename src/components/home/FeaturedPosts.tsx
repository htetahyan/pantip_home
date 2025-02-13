'use client'

import { useQuery } from '@tanstack/react-query'
import { MessageSquare } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface Post {
  id: number
  title: string
  author: string
  room: string
  thumbnail: string
  comments: number
  votes: number
  timestamp: string
  excerpt: string
}

interface PostsData {
  featured: Post[]
  popular: Post[]
}

const FeaturedPosts = () => {
  const { data, isLoading } = useQuery<{ success: boolean; data: PostsData }>({
    queryKey: ['posts'],
    queryFn: async () => {
      const response = await fetch('/api/home/posts')
      return response.json()
    }
  })

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2].map((i) => (
          <div key={i} className="bg-[#1B1B2F] p-4 rounded-lg animate-pulse">
            <div className="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
            <div className="h-3 bg-gray-700 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    )
  }

  const renderPostList = (posts: Post[], title: string, subtitle: string) => (
    <div className="bg-[#1B1B2F] rounded-lg overflow-hidden">
      <div className="bg-[#2B2B3F] p-4">
        <h2 className="text-amber-400 font-bold">{title}</h2>
        <p className="text-xs text-gray-400">{subtitle}</p>
      </div>
      <div className="divide-y divide-gray-700/50">
        {posts.map((post) => (
          <div key={post.id} className="hover:bg-[#2B2B3F]/50 transition-colors">
            <Link href={`/post/${post.id}`} className="block p-4">
              <div className="flex gap-3">
                <div className="relative w-16 h-16 flex-shrink-0 rounded-md overflow-hidden">
                  <Image
                    src={post.thumbnail}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm text-white mb-2">{post.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="text-xs text-blue-400">
                      #{post.room}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span>Member number {Math.floor(Math.random() * 1000000)}</span>
                    <span>{new Date(post.timestamp).toLocaleTimeString()}</span>
                    <div className="flex items-center gap-1">
                      <MessageSquare className="w-3 h-3" />
                      {post.comments}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="bg-[#2B2B3F]/50 p-3 text-center">
        <button className="text-sm text-purple-300 hover:text-purple-200">
          View all
        </button>
      </div>
    </div>
  )

  return (
    <div className="space-y-4">
      {renderPostList(
        data?.data.featured || [],
        'Trending Topics',
        'Popular discussions from our community'
      )}
      {renderPostList(
        data?.data.popular || [],
        'Popular Posts',
        'Most engaging content'
      )}
    </div>
  )
}

export default FeaturedPosts
