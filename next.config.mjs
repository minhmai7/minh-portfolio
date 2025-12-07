/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow access from local network during development
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*', // Allow all origins in development
          },
        ],
      },
    ];
  },
};

export default nextConfig;
