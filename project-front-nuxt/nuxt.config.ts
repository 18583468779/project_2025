// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@vite-pwa/nuxt'
  ],

  css: ['@unocss/reset/tailwind.css'],
  pwa: {
    manifest: {
      name: 'Vite App',
      short_name: 'Vite App',
      theme_color: '#ffffff',
      icons: [
        {
          src: '/192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    },
    registerType: 'autoUpdate'
  }
})
