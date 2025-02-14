'use client'

import {  Skeleton } from '@heroui/react'
import { useQuery } from '@tanstack/react-query'
import { MessageSquare, ThumbsUp, TrendingUp, Star, Eye, FireExtinguisher } from 'lucide-react'
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
  latest: Post[]
  trending: Post[]
  recommended: Post[]
  mostViewed: Post[]
  hotTopics: Post[]
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
      <div className="space-y-8">
        {[1, 2, 3, 4].map((section) => (
          <div key={section} className="space-y-4">
            <Skeleton className="h-8 w-48" />
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex space-x-4 p-4">
                  <Skeleton className="h-20 w-20 rounded-lg" />
                  <div className="space-y-2 flex-1">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                    <div className="flex space-x-4">
                      <Skeleton className="h-4 w-16" />
                      <Skeleton className="h-4 w-16" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  }

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))
    
    if (diffInHours < 1) return 'Just now'
    if (diffInHours < 24) return `${diffInHours}h ago`
    return date.toLocaleDateString('th-TH', { day: 'numeric', month: 'short' })
  }

  const formatNumber = (num: number): string => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "k";
    }
    return num.toString();
  };

  const PostCard = ({ post }: { post: Post }) => (
    <div className="flex flex-col space-y-2 p-4 rounded-lg bg-card hover:bg-accent/50 transition-colors">
      <div className="flex items-start space-x-4">
        <Image
          src={post.thumbnail}
          width={80}
          height={80}
          alt={post.title}
          className="w-20 h-20 object-cover rounded-lg"
        />
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-medium leading-tight line-clamp-2 mb-1">
            {post.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
            {post.excerpt}
          </p>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span className="flex items-center">
              <MessageSquare className="w-4 h-4 mr-1" />
              {formatNumber(post.comments)}
            </span>
            <span className="flex items-center">
              <ThumbsUp className="w-4 h-4 mr-1" />
              {formatNumber(post.votes)}
            </span>
            <span>
              {formatTime(post.timestamp)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  const PostSection = ({ 
    title, 
    posts, 
    icon: Icon 
  }: { 
    title: string; 
    posts: Post[]; 
    icon: any;
  }) => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Icon className="w-5 h-5" />
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      <div className="grid gap-4">
        {posts?.map((post) => (
          <Link key={post.id} href={`/post/${post.id}`} className="block">
            <PostCard post={post} />
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      <PostSection
        title="กระทู้แนะนำ"
        posts={data?.data.featured || []}
        icon={Star}
      />
      <PostSection
        title="กำลังฮิต"
        posts={data?.data.trending || []}
        icon={TrendingUp}
      />
      <PostSection
        title="มาแรง"
        posts={data?.data.popular || []}
        icon={FireExtinguisher}
      />
      <PostSection
        title="คนดูเยอะ"
        posts={data?.data.mostViewed || []}
        icon={Eye}
      />
      <PostSection
        title="แนะนำสำหรับคุณ"
        posts={data?.data.recommended || []}
        icon={Star}
      />
      <PostSection
        title="หัวข้อฮอต"
        posts={data?.data.hotTopics || []}
        icon={FireExtinguisher}
      />
      <PostSection
        title="มาใหม่"
        posts={data?.data.latest || []}
        icon={TrendingUp}
      />
    {//no more posts 
    }
    <div className='p-4 w-full'>
      <h2 className='text-md text-center'>อุ๊ย! หมดแล้วเหรอ
      ?</h2>
    </div>
    </div>
  )
}

export default FeaturedPosts
