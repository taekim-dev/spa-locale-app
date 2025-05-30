<template>
  <div>
    <h1>Fail Page</h1>
    <p>Current locale: {{ $route.params.locale }}</p>
    <NuxtLink :to="`/${$route.params.locale}/pinetree`">Back to Pinetree</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
</script> 