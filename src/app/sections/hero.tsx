import { Button } from '@/components/ui/button'
import SplineNext from '@splinetool/react-spline/next'
import Image from 'next/image'
import React from 'react'

export const Hero = () => {
  return (
    <section className=" container mx-auto  px-4 py-24 text-center">
      <h1 className="text-4xl text-slate-800 md:text-6xl font-bold mb-6">
        Transform Your Vision into Stunning Digital Experiences
      </h1>
      <p className="text-center mb-6 text-slate-600 text-xl font-medium ">
        Affordable monthly subscriptions for top-tier mobile and web design.
        Simplify your creative needs with our expert team.
      </p>
      <Button size="lg">Get Started</Button>
      <div className="mt-6">
        <SplineNext scene="https://prod.spline.design/TKwDCiLxgV7bbY7k/scene.splinecode" />
      </div>
    </section>
  )
}
