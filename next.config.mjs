/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // TODO: 배포할 때는 바꿀 것
    remotePatterns: [
      {
        hostname: 's3.ap-northeast-2.amazonaws.com',
        protocol: 'https',
      },
    ],
  },
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default nextConfig;
