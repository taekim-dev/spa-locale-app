<template>
  <div>
    <h1>Pinetree Page</h1>
    <p>Current locale: {{ $route.params.locale }}</p>
    <div>
      <NuxtLink :to="`/${$route.params.locale}/locale/pinetree/success`">Go to Success</NuxtLink> |
      <NuxtLink :to="`/${$route.params.locale}/locale/pinetree/fail`">Go to Fail</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
</script> 