// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-BR'
      }
    }
  },
  runtimeConfig: {
    public: {
      apiBase: 'https://balloonapi.onrender.com',
    },
  },
  css: ["./main.css"],
  modules: [[
    '@pinia/nuxt',
    {
      autoImports: [
        'defineStore',
        ['defineStore', 'definePiniaStore'],
      ],
    },
  ], '@pinia/nuxt'],
})