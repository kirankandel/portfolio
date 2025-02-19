const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: '/portfolio',  // Replace with your GitHub repo name
  assetPrefix: isProd ? '/portfolio/' : '',
};

module.exports = nextConfig;
