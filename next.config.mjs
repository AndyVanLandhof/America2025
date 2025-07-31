/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Add explicit output configuration
  output: 'standalone',
  // Ensure proper static generation
  trailingSlash: false
}

export default nextConfig
