'use client'

import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

interface HighlightItem {
  name: string
  message: string
  weight: number
  image_url: string[]
  post_url: string
}

const Highlight = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { data, isLoading } = useQuery<{ data: HighlightItem[] }>({
    queryKey: ['highlight'],
    queryFn: async () => {
      const response = await fetch('/api/home/highlight')
      return response.json()
    }
  })

  useEffect(() => {
    if (!data?.data) return
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % data.data.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [data?.data])

  if (isLoading) {
    return (
      <div className="bg-[#1B1B2F] rounded-lg p-4">
        <div className="h-48 bg-gray-700 rounded animate-pulse"></div>
      </div>
    )
  }

  return (
    <div className="bg-[#1B1B2F] rounded-lg overflow-hidden">
      <div className="relative aspect-[2/1] bg-gray-800">
        {data?.data.map((item, index) => (
          <Link
            key={index}
            href={item.post_url}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={item.image_url[1]} // Using medium size image (400px)
              alt={item.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.name}
                </h3>
                {item.message && (
                  <p className="text-sm text-gray-300">{item.message}</p>
                )}
              </div>
            </div>
          </Link>
        ))}
        <div className="absolute bottom-4 right-4 flex gap-2">
          {data?.data.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-white' : 'bg-white/30'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Highlight
