<template>
  <h2>User Role 2</h2>
  
  <pre>{{ data }}</pre>
    
  </template>
  
  <script setup lang="ts">
  const { data } = await useFetch('/api/user/kdunit/userkdunit42')
  
  definePageMeta({
  layout: 'layouthewan'
})
  </script>
  