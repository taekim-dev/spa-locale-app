<template>
  <div class="page">
    <div class="fail-container">
      <h1>Process Failed ⚠️</h1>
      <p class="locale-info">Region: {{ getLocaleName($route.params.locale) }}</p>
      <div class="message">
        <p>We encountered an issue while processing your Pinetree service request.</p>
        <p>Please try again or contact support if the issue persists.</p>
      </div>
      <NuxtLink :to="`/${$route.params.locale}/pinetree`" class="back-link">
        ← Return to Pinetree Service
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

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

.fail-container {
  padding: 30px;
  background-color: #fff8f8;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.locale-info {
  color: #666;
  margin-bottom: 20px;
}

.message {
  margin: 30px 0;
  line-height: 1.6;
}

.back-link {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  color: #f44336;
  text-decoration: none;
  border: 1px solid #f44336;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.back-link:hover {
  background-color: #f44336;
  color: white;
}
</style> 