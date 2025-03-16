const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  output: 'export',
  assetPrefix: isProd ? '' : '',
  // basePath: '',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
