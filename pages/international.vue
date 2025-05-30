<template>
  <div>
    <h1>International Page</h1>
    <div>
      <NuxtLink v-for="locale in config.public.locales" 
                :key="locale" 
                :to="`/${locale}/pinetree`"
                class="locale-link">
        Go to {{ locale }} Pinetree
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
</script>

<style scoped>
.locale-link {
  display: block;
  margin: 10px 0;
  text-decoration: none;
  color: #333;
}
.locale-link:hover {
  text-decoration: underline;
}
</style> 