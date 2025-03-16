const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  output: 'export',
  assetPrefix: isProd ? 'https://kirankandel.github.io/portfolio' : '',
  // basePath: '',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
