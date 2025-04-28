/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'next',
  devIndicators: false,
  images: {
    // Enable image optimization
    unoptimized: false,
    // Configure image domains if you have external image sources
    // domains: ['your-domain.com'],
    // Configure image size presets for better performance
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Format optimization
    formats: ['image/webp', 'image/avif'],
    // Minimum cache duration for optimized images (24 hours)
    minimumCacheTTL: 60 * 60 * 24,
    // Disable static image import optimization if needed
    disableStaticImages: false,
    // Enable remote patterns if needed
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: '**.example.com',
    //   },
    // ],
    // Dangerously allow SVG if needed (disabled by default for security)
    dangerouslyAllowSVG: false,
    contentDispositionType: 'inline',
    // Cache optimization
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
