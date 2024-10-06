import React from 'react'
import { Work } from './work'

export const Services = () => {
  const services = {
    primary: [
      'Mobile Product Design',
      'Web Product Design',
      'UI/UX Design',
      'No Code Development',
      'Google Ad Consultation',
      'Social Media Posts',
      'Presentation Deck Design',
      'Branding',
    ],
    secondary: ['React / React Native Development'],
  }
  return (
    <section
      className=" container mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-4 gap-8"
      id="services"
    >
      <div className="col-span-1 space-y-4">
        <h2 className=" ">Services</h2>
        <ServiceUl>
          {services.primary.map((item) => (
            <ServiceLi key={item}>{item}</ServiceLi>
          ))}
        </ServiceUl>
        <ServiceUl>
          <h3 className=" ">Specialized Offerings</h3>
          {services.secondary.map((item) => (
            <ServiceLi key={item}>{item}</ServiceLi>
          ))}
        </ServiceUl>
      </div>
      <Work />
    </section>
  )
}

const ServiceLi = ({ children }: { children: React.ReactNode }) => {
  return <li className="text-gray-700 font-semibold">{children}</li>
}
const ServiceUl = ({ children }: { children: React.ReactNode }) => {
  return <ul className="space-y-2">{children}</ul>
}
