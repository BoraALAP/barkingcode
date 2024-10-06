'use client'

import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

import { RainbowButton } from './ui/rainbow-button'
import Link from 'next/link'
import Logo from '/public/assets/logo.svg'
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    console.log('clicked')

    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed top-3 left-2 right-2 z-50 flex justify-center">
      <div className="w-full max-w-[1248px] h-[70px] px-6 bg-white/90 rounded-2xl border border-[#e9e9e9] backdrop-blur-[20px] justify-between items-center flex">
        <div className="justify-start items-start flex">
          <div className="w-[146px] h-10 relative">
            <Link href="/">
              <Logo />
            </Link>
          </div>
        </div>
        <nav className="hidden md:flex justify-start items-center gap-8">
          <div className="px-3 py-6 justify-start items-start flex">
            <Link
              href="./#howitworks"
              className=" text-sm font-semibold font-lexend capitalize leading-snug"
            >
              How it works
            </Link>
          </div>
          <div className="px-3 py-6 justify-start items-start flex">
            <Link
              href="./#services"
              className=" text-sm font-semibold font-lexend capitalize leading-snug"
            >
              Services
            </Link>
          </div>
          <div className="px-3 py-6 justify-start items-start flex">
            <Link
              href="./#pricing"
              className=" text-sm font-semibold font-lexend capitalize leading-snug"
            >
              Pricing
            </Link>
          </div>
          <Link href="./#pricing">
            <RainbowButton>Get Started</RainbowButton>
          </Link>
        </nav>
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 top-[82px] bg-white z-40 md:hidden">
          <nav className="flex flex-col items-center pt-6">
            <div className="py-4">
              <Link href="./#howitworks">
                <button
                  className="text-sm font-semibold font-lexend capitalize leading-snug"
                  onClick={toggleMenu}
                >
                  How it works
                </button>
              </Link>
            </div>
            <div className="py-4">
              <Link href="./#services">
                <button
                  className="text-sm font-semibold font-lexend capitalize leading-snug"
                  onClick={toggleMenu}
                >
                  Services
                </button>
              </Link>
            </div>
            <div className="py-4">
              <Link href="./#pricing">
                <button
                  className="text-sm font-semibold font-lexend capitalize leading-snug"
                  onClick={toggleMenu}
                >
                  Pricing
                </button>
              </Link>
            </div>
            <Link href="./#pricing">
              <button onClick={toggleMenu}>
                <RainbowButton>Get Started</RainbowButton>
              </button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
