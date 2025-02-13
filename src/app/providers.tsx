// app/providers.tsx
'use client'

import {HeroUIProvider} from '@heroui/react'
import QueryProvider from '@/components/providers/QueryProvider'

export function Providers({children}: {children: React.ReactNode}) {
  return (
    <QueryProvider>
      <HeroUIProvider>
        {children}
      </HeroUIProvider>
    </QueryProvider>
  )
}