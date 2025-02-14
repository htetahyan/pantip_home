/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['ptcdn.info'],
        
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ptcdn.info',

            },
            {
                protocol: 'https',
                hostname: 'picsum.photos',
            },
            {
                protocol: 'https',
                hostname: 'www.pantipmarket.com',
                port: '',
            }
        ],
    },
};

export default nextConfig;
