/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    // output: 'export',
    // distDir: "out",
   
    // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
    // trailingSlash: true,
   
    // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
    // skipTrailingSlashRedirect: true,
   
    // Optional: Change the output directory `out` -> `dist`
    // distDir: 'dist',
    exportPathMap: async function (defaultPathMap) {
        return {
          '/': { page: '/' },
          '/index-light': { page: '/index-light' },
          '/intro': { page: '/intro' },
          // Add more paths as necessary
        };
      },
  }
   
  module.exports = nextConfig