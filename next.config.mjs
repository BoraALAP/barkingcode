import nextSvgr from 'next-svgr'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

export default nextSvgr(nextConfig)
