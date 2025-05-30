import { defineNuxtRouteMiddleware, useRuntimeConfig, navigateTo } from '#app'

export default defineNuxtRouteMiddleware((to, from) => {
  const path = to.path
  
  // Check if the path starts with /webstore/
  if (path.startsWith('/webstore/')) {
    // Extract locale and remaining path
    const parts = path.split('/')
    if (parts.length >= 4) {
      const locale = parts[2]
      const remainingPath = parts.slice(4).join('/')
      
      // Validate locale
      const config = useRuntimeConfig()
      if (!config.public.locales.includes(locale)) {
        return navigateTo('/en-us/international')
      }
      
      // Rewrite the path
      return navigateTo(`/${locale}/locale/${remainingPath}`)
    }
  }
}) 