/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/crm",
        destination: "https://srventerprisesgroup.com",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
