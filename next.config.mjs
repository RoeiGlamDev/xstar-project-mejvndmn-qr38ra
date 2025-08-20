import { defineConfig } from 'next';

export default defineConfig({
  reactStrictMode: true, // Enables React's strict mode
  images: {
    domains: ['example.com'], // Add your image domains here
  },
  env: {
    SITE_NAME: 'CleanSSR', // Environment variable for site name
  },
  i18n: {
    locales: ['en'], // Supported locales
    defaultLocale: 'en', // Default locale
  },
  webpack: (config, { isServer }) => {
    // Custom webpack configuration
    if (!isServer) {
      config.resolve.fallback.fs = false; // Prevent fs module error on client
    }
    return config;
  },
});