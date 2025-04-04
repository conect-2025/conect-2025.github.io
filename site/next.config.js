/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'conect-2025 Registry',
    description: 'WEBS OF THE WEB',
    icon: '/img/logo.svg',
    listUrl: 'https://conect-2025.github.io/kasm.registry/',
    contactUrl: 'https://github.com/conect-2025/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
