import Image from 'next/image'
import React from 'react'

export const Work = () => {
  const work = [
    {
      src: '/assets/work/EkarMobile.jpg',
      alt: 'Ekar Mobile',
    },
    {
      src: '/assets/work/EkarWeb.jpg',
      alt: 'Ekar Web',
    },
    {
      src: '/assets/work/AccentTranslation.jpg',
      alt: 'Accent Translations',
    },
    {
      src: '/assets/work/Frank.jpg',
      alt: 'Frank',
    },
    {
      src: '/assets/work/JaspersPaw.jpg',
      alt: 'Jasper Paw',
    },
    {
      src: '/assets/work/Ostaco.jpg',
      alt: 'Ostaco',
    },
    {
      src: '/assets/work/Profillet.jpg',
      alt: 'Profillet',
    },
    {
      src: '/assets/work/ProfilletBranding.jpg',
      alt: 'Profillet Branding',
    },
  ]
  return (
    <div className="grid md:grid-cols-2 gap-8 col-span-3">
      {work.map((item) => (
        <div
          key={item.alt}
          className="bg-gray-200 h-[300px] w-full group overflow-hidden rounded-lg bg-cover bg-center shadow-lg relative group aspect-[9/16]"
        >
          <div
            className="w-full h-full bg-cover bg-center overflow-hidden transform transition-transform duration-300 ease-in-out group-hover:scale-110"
            style={{ backgroundImage: `url(${item.src})` }}
          />
        </div>
      ))}
    </div>
  )
}
