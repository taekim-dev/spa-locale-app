<template>
  <div class="page">
    <h1>Welcome to the International Landing Page</h1>
    <p>Please select your region to continue:</p>
    <div class="locale-links">
      <NuxtLink v-for="locale in config.public.locales" 
                :key="locale" 
                :to="`/${locale}/pinetree`"
                class="locale-link">
        {{ getLocaleName(locale) }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()

const getLocaleName = (locale: string) => {
  const names = {
    'en-us': 'United States (English)',
    'pt-br': 'Brasil (Português)',
    'fr-fr': 'France (Français)'
  }
  return names[locale] || locale
}
</script>

<style scoped>
.page {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.locale-links {
  margin-top: 30px;
}

.locale-link {
  display: block;
  margin: 15px 0;
  padding: 10px;
  text-decoration: none;
  color: #333;
  border: 1px solid #ddd;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.locale-link:hover {
  background-color: #f5f5f5;
  transform: translateY(-2px);
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}
</style> 