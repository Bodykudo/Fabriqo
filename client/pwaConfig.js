export const pwaConfig = {
  registerType: 'prompt',
  includeAssests: ['favicon.ico', 'apple-touc-icon.png', 'masked-icon.svg'],
  manifest: {
    name: 'Fabriqo',
    short_name: 'Fabriqo',
    description:
      'Craft your distinct fashion statement, Redefine fashion, your way.',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'favicon',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'favicon',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'apple touch icon',
      },
      {
        src: '/maskable_icon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
    theme_color: '#f9fafb',
    background_color: '#171717',
    display: 'standalone',
    scope: '/',
    start_url: '/',
    orientation: 'portrait',
  },
  workbox: {
    clientsClaim: true,
    skipWaiting: true,
  },
};
