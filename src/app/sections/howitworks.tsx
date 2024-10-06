import React from 'react'
import { BentoCard, BentoGrid } from '@/components/ui/bento-grid-howitworks'

export const HowItWorks = () => {
  const features = [
    {
      name: 'Fixed-Price Subscription',
      description:
        'Transparent pricing with no hidden fees. Predictable monthly costs tailored to your needs.',
      from: 'from-[#ffe5e5]',
      to: 'to-[#ffb8b8]',
      className:
        'sm:col-span-1 lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3',
    },
    {
      name: 'Expert Design Team',
      description:
        'A dedicated team of experienced designers committed to delivering excellence and exceeding your expectations.',
      from: 'from-[#ffeee5]',
      to: 'to-[#ffcfb8]',
      className:
        'sm:col-span-1 lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2',
    },
    {
      name: 'Fast Turnaround',
      description:
        'Quick delivery times without compromising on quality, ensuring your projects stay on schedule.',
      from: 'from-[#fff6e5]',
      to: 'to-[#ffe7b8]',
      className:
        'sm:col-span-1 lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-4',
    },
    {
      name: 'Unlimited Revisions',
      description:
        'Ensure your satisfaction with unlimited design revisions within your subscription plan.',
      from: 'from-[#ffffe5]',
      to: 'to-[#ffffb8]',
      className:
        'sm:col-span-1 lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4',
    },
    {
      name: 'Seamless Collaboration',
      description:
        'Effortlessly manage your projects with our integrated Notion and Typeform workflow, designed for efficiency and transparency.',
      from: 'from-[#f6ffe5]',
      to: 'to-[#e7ffb8]',
      className:
        'sm:col-span-1 lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-4',
    },
  ]
  return (
    <section className="container mx-auto px-4 py-20" id="howitworks">
      <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
      <BentoGrid className="sm:grid-cols-2 lg:grid-rows-3 lg:grid-cols-3">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </section>
  )
}
