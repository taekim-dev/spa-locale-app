<template>
  <div>
    <nav>
      <NuxtLink v-for="locale in config.public.locales" 
                :key="locale" 
                :to="`/${locale}/international`"
                class="locale-link">
        {{ locale }}
      </NuxtLink>
    </nav>
    <slot />
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
</script>

<style scoped>
.locale-link {
  margin-right: 10px;
  text-decoration: none;
  color: #333;
}
.locale-link:hover {
  text-decoration: underline;
}
</style> 