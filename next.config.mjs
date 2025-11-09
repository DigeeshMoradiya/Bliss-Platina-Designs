/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['10.187.121.187', '10.221.101.187', '10.214.5.187', 'blissplatina.com', 'api.blissplatina.com'], // allow loading from this IP
  },
  async redirects() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
