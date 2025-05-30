<template>
  <div class="page">
    <h1>Welcome to {{ getLocaleName($route.params.locale) }} Pinetree Page</h1>
    <p>You are viewing the Pinetree service page for {{ getLocaleName($route.params.locale) }}</p>
    
    <div class="navigation">
      <h2>Choose your path:</h2>
      <div class="buttons">
        <NuxtLink :to="`/${$route.params.locale}/pinetree/success`" class="button success">
          Continue to Success Page
        </NuxtLink>
        <NuxtLink :to="`/${$route.params.locale}/pinetree/fail`" class="button fail">
          View Fail Page
        </NuxtLink>
      </div>
      <NuxtLink to="/international" class="back-link">← Back to International Selection</NuxtLink>
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

.navigation {
  margin-top: 40px;
}

.buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin: 20px 0;
}

.button {
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.success {
  background-color: #4CAF50;
  color: white;
}

.fail {
  background-color: #f44336;
  color: white;
}

.button:hover {
  opacity: 0.9;
  transform: translateY(-2px);
}

.back-link {
  display: block;
  margin-top: 30px;
  color: #666;
  text-decoration: none;
}

.back-link:hover {
  text-decoration: underline;
}
</style> 