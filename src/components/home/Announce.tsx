'use client'

import { Skeleton } from '@heroui/react'
import { useQuery } from '@tanstack/react-query'

interface Announcement {
  announce_id: number
  category_name: string
  type: string
  display_message: string
  created_time: string
}

interface AnnouncementResponse {
  success: boolean
  data: Announcement[]
}

const Announce = () => {
  const { data, isLoading } = useQuery<AnnouncementResponse>({
    queryKey: ['announcements'],
    queryFn: async () => {
      const response = await fetch('/api/home/announcements')
      return response.json()
    }
  })

  if (isLoading) {
    return (
      <div className='space-y-2 px-6'>
        {[1, 2, 3].map((i) => (
          <div key={i}>
            <Skeleton className="h-8 rounded" />
          </div>
        ))}
      </div>
    )
  }

  if (!data?.success || !data?.data) {
    return null
  }

  return (
    <div className='space-y-2 px-6'>
      {data.data.map((announcement) => (
        <div
          key={announcement.announce_id}
          className="rounded hover:bg-[#f5f5f5] transition-colors p-2"
          dangerouslySetInnerHTML={{ __html: announcement.display_message }}
        />
      ))}
    </div>
  )
}

export default Announce