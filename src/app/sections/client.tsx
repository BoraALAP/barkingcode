import React from 'react'

import { cn } from '@/lib/utils'
import Marquee from '@/components/ui/marquee'
import AccentLogo from '/public/assets/clients/accentlogo.svg'
import EkarLogo from '/public/assets/clients/ekarlogo.svg'
import OstacoLogo from '/public/assets/clients/ostacologo.svg'
import ProfilletLogo from '/public/assets/clients/profilletlogo.svg'
import FrankLogo from '/public/assets/clients/franklogo.svg'

const reviews = [
  <AccentLogo className="  object-contain   " />,
  <EkarLogo className="  object-contain   " />,
  <ProfilletLogo className="  object-contain   " />,
  <OstacoLogo className="  object-contain   " />,
  <FrankLogo className="  object-contain   " />,
]

const firstRow = reviews.slice(0, reviews.length / 2)

const ReviewCard = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return <div className={cn('  m-5    p-4', className)}>{children}</div>
}

export const Client = () => {
  return (
    <div className="relative flex  my-10  flex-col items-center justify-center overflow-hidden  ">
      <Marquee pauseOnHover className="[--duration:20s] ">
        {reviews.map((logo, index) => (
          <ReviewCard key={index}>{logo}</ReviewCard>
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  )
}
