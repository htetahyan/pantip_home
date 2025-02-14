'use client'

import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Button, Skeleton } from '@heroui/react'
import Image from 'next/image'

interface HighlightData {
  name: string
  message: string
  weight: number
  image_url: string[]
  post_url: string
}

const Highlight = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [itemsPerSlide, setItemsPerSlide] = useState(1);

  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerSlide(3); // Desktop
      } else if(window.innerWidth >= 768) {
        setItemsPerSlide(2); // Tablet
      } else {
        setItemsPerSlide(1); // Mobile
      }
    };

    updateItemsPerSlide(); // Initial check
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);


  const { data, isLoading } = useQuery<{ success: boolean; data: HighlightData[] }>({
    queryKey: ['highlight-topics'],
    queryFn: async () => {
      const response = await fetch('/api/home/highlight')
      return response.json()
    }
  })

  if (isLoading) {
    return (
      <div className="rounded-lg overflow-hidden">
        <div className="grid grid-cols-3 gap-4 p-4">
          {[1, 2, 3].map((i) => (
            <div key={i}>
              <Skeleton className="aspect-[4/3] rounded-lg mb-3" />
              <Skeleton className="h-4 w-3/4 mb-2" />
              <Skeleton className="h-3 w-1/2" />
            </div>
          ))}
        </div>
      </div>
    )
  }

  const totalSlides = data ? Math.ceil(data.data.length / 3) : 0

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  return (
    <div className=" rounded-lg overflow-hidden w-full">
      <div className="relative">
        {totalSlides > 1 && (
          <>
            <Button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-white/80 rounded-full shadow-md hover:bg-white transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-white/80 rounded-full shadow-md hover:bg-white transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </>
        )}
        
        <div className="grid gridcols-1 md:grid-cols-2  lg:grid-cols-3 gap-4 p-4">
          {data?.data
            .slice(currentSlide * itemsPerSlide, (currentSlide + 1) * itemsPerSlide)
            .map((item, index) => (
              <Link
                key={index}
                href={item.post_url}
                className="block group"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={item.image_url[1]} // Using medium size image (400px)
                    alt={item.name}
                    fill
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                </div>
                <div className="mt-3">
                  <h3 className=" font-medium text-sm sm:text-base line-clamp-2  transition-colors">
                    {item.name}
                  </h3>
                  {item.message && (
                    <p className="text-gray-400 text-xs sm:text-sm mt-1 line-clamp-2">
                      {item.message}
                    </p>
                  )}
                </div>
              </Link>
            ))}
        </div>

        {totalSlides > 1 && (
          <div className="flex justify-center gap-2 p-4">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <Button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-white' : 'bg-white/30'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Highlight
