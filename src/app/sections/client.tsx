import React from 'react'

import { cn } from '@/lib/utils'
import Marquee from '@/components/ui/marquee'

import Image from 'next/image'

const reviews = [
  { src: '/assets/clients/frankLogo.svg', alt: 'Frank Logo' },
  { src: '/assets/clients/accentLogo.svg', alt: 'Accent Logo' },
  { src: '/assets/clients/ostacoLogo.svg', alt: 'Ostaco Logo' },
  { src: '/assets/clients/profilletLogo.svg', alt: 'Profillet Logo' },
  { src: '/assets/clients/ekarLogo.svg', alt: 'Ekar Logo' },
  { src: '/assets/clients/hirooLogo.svg', alt: 'Hiroo Logo' },
]

const firstRow = reviews.slice(0, reviews.length / 2)

const ReviewCard = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div className={cn('  m-5  self-center   p-4', className)}>{children}</div>
  )
}

export const Client = () => {
  return (
    <div className="relative flex  my-10  flex-col items-center justify-center overflow-hidden  ">
      <Marquee pauseOnHover className="[--duration:20s] ">
        {reviews.map((logo, index) => (
          <ReviewCard key={index}>
            <Image src={logo.src} alt={logo.alt} width={100} height={100} />
          </ReviewCard>
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  )
}
