/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
        formats: ['image/webp'],
    },
    compress: true,
    poweredByHeader: false,
    generateEtags: true,
    // Enable strict mode for better React practices
    reactStrictMode: true,
    // Optimize production builds
    swcMinify: true,
}

module.exports = nextConfig
