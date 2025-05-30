// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // Define valid locales
  runtimeConfig: {
    public: {
      locales: ['en-us', 'pt-br', 'fr-fr']
    }
  }
}) 