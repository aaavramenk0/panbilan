/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ['ua'],
        defaultLocale: 'ua',
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '**',
          }
        ],
      },
}

module.exports = nextConfig
