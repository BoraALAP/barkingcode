import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import ShineBorder from '@/components/ui/shine-border'
import { CheckCircle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const Pricing = () => {
  const List = {
    design: {
      title: 'Design',
      description:
        'Comprehensive design solutions tailored to your business needs. Our Design Package focuses on creating stunning and user-centric mobile and web products that elevate your brand and engage your audience.',
      price: '€4000',
      features: [
        'Production-Ready Web/App Designs',
        'Strategic Kick-off Call',
        'Unlimited Requests & Revisions',
        'One Request at a Time',
        'Avg. 48h Delivery',
        '1-2 Day Revisions',
        'Dev Ready Figma Files',
        'Slack Collaboration',
        'Weekly Meetings (if needed)',
        'Figma Prototypes',
      ],
    },
    full: {
      title: 'Full',
      description:
        'All-inclusive design and development solutions to transform your digital presence. Our Full-Service Package encompasses everything from expert design to seamless development and ongoing support, ensuring your projects are executed flawlessly from start to finish.',
      price: '€6000',
      features: [
        'Everything from Design',
        'Webflow / Framer Development',
        'Priority Support & Delivery',
        'End-to-End Support',
        '1:1 Async Communication',
        'Daily Project Updates',
      ],
    },
  }

  return (
    <section className="py-20" id="pricing">
      <div className="container mx-auto px-4">
        <div className="flex justify-center flex-col md:flex-row gap-10 md:gap-0 items-center md:pl-20">
          <ShineBorder
            className="p-10 py-12  bg-orange-50 max-w-[600px]"
            color={['#ffb8b8', '#ffe7b8', '#e7ffb8', '#ffcfb8', '#ffffb8']}
          >
            <div className="z-10 flex flex-col justify-center gap-6">
              <div className="flex flex-col gap-4 justify-center items-center">
                <h3 className="text-2xl font-semibold ">{List.design.title}</h3>
                <p className="max-w-sm text-center font-medium text-slate-700">
                  {List.design.description}
                </p>
                <div>
                  <p className="text-sm text-slate-500 font-medium">
                    Single Price of
                  </p>
                  <h3 className="text-4xl font-bold  align-top items-start flex gap-1 font-lexend">
                    {List.design.price}
                    <span className="text-sm text-secondary font-bold">
                      / mo
                    </span>
                  </h3>
                </div>
                <Link
                  href="https://calendar.app.google/sWGMdY5nu1Lia6aa9"
                  target="_blank"
                >
                  <Button className="w-full z-10">Book a Call</Button>
                </Link>
              </div>
              <Separator />
              <ul className="space-y-3 mb-6">
                {List.design.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="text-green-500" />
                    <p className="text-slate-800 font-medium text-sm">
                      {feature}
                    </p>
                  </li>
                ))}
              </ul>
              <Separator />
              <h4 className="text-slate-600 text-center">
                Pause or cancel anytime
              </h4>
            </div>
          </ShineBorder>

          <div className="pr-10 py-10 pl-16 flex flex-col justify-center gap-6 border shadow-md md:-ml-6 rounded-2xl bg-white w-fit h-fit max-w-[400px]">
            <div className="flex flex-col flex-shrink gap-4 items-center ">
              <h3 className="text-2xl font-semibold ">{List.full.title}</h3>
              <p className="max-w-sm text-center font-medium text-slate-700 text-sm">
                {List.full.description}
              </p>
              <div>
                <p className="text-sm text-slate-500 font-medium">
                  Single Price of
                </p>
                <h3 className="text-4xl font-bold  align-top items-start flex gap-1 font-lexend">
                  {List.full.price}
                  <span className="text-sm text-secondary font-bold">/ mo</span>
                </h3>
              </div>
              <Link
                href="https://calendar.app.google/sWGMdY5nu1Lia6aa9"
                target="_blank"
              >
                <Button className="w-full">Book a Call</Button>
              </Link>
            </div>
            <Separator />
            <ul className="space-y-3 mb-6">
              {List.full.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" />
                  <p className="text-slate-800 font-medium text-sm">
                    {feature}
                  </p>
                </li>
              ))}
            </ul>
            <Separator />
            <h4 className="text-slate-600 text-center">
              Pause or cancel anytime
            </h4>
          </div>
        </div>
      </div>
    </section>
  )
}
