/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'standalone',
    trailingSlash: true,
    // Ensure static files are handled correctly in Docker
    assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
    images:{
        unoptimized: true,
    },
    async headers(){
        // add cors
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'Access-Control-Allow-Origin',
                        value: '*',
                    },
                ],
            },
        ]
    },
    // Enable static file serving
    staticPageGenerationTimeout: 1000,
    // experimental: { appDir: true },
}

module.exports = nextConfig
