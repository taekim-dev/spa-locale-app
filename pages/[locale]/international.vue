<template>
  <div>
    <h1>International Page</h1>
    <p>Current locale: {{ $route.params.locale }}</p>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
</script> 