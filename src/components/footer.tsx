import React from 'react'

import Image from 'next/image'

export const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0 space-y-4">
            <Image
              src="/assets/logoWhite.svg"
              alt="logo"
              width={160}
              height={100}
            />
            <ul className="space-y-2">
              <li>
                <a
                  href="/privacypolicy"
                  className="text-gray-300 hover:text-white text-xs"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/termsofservice"
                  className="text-gray-300 hover:text-white text-xs"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-xs">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <h3 className="text-2xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:info@barkingcode.com"
                  className="text-gray-300 hover:text-white text-xs"
                >
                  Email: info@barkingcode.com
                </a>
              </li>

              <li>
                <p className="text-gray-300 hover:text-white text-xs">
                  Location: Amsterdam, Netherlands
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 text-center">
          <small className="text-gray-300 font-medium">
            &copy; {new Date().getFullYear()} Barking Code. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  )
}
