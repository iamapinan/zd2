/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // output: 'export',
    assetPrefix: './',
    images: { unoptimized: true },
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback.fs = false
        }
        return config
    },
    // experimental: { appDir: true },
}

module.exports = nextConfig
