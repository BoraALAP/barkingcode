import { Button } from '@/components/ui/button'
import React from 'react'
import { useTheme } from 'next-themes'

import ShineBorder from '@/components/ui/shine-border'
import FlickeringGrid from '@/components/ui/flickering-grid'
import Link from 'next/link'

export const CTAcard = () => {
  return (
    <section className=" flex align-center justify-center ">
      <div className="max-w-2xl bg-background overflow-hidden border rounded-2xl relative container mx-auto  text-center text-white bg-black">
        <FlickeringGrid
          className="z-0 absolute inset-0 size-full"
          squareSize={4}
          gridGap={6}
          color="#6B7280"
          maxOpacity={0.5}
          flickerChance={0.1}
          height={800}
          width={800}
        />
        <div className="relative px-6 py-4 md:px-20 md:py-16 z-10">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Elevate Your Digital Presence?
          </h2>
          <p className="text-md mb-4 font-medium">
            Partner with us to transform your mobile and web design needs. Our
            subscription-based services offer flexibility, quality, and
            reliability to help your business thrive in the digital landscape.
          </p>
          <Link href="/#pricing">
            <Button
              variant="outline"
              size="lg"
              className="text-black border-white hover:bg-white hover:text-gray-900"
            >
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
