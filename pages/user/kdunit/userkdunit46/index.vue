<template>
  <h2>User Role 3</h2>
  
  <pre>{{ data }}</pre>
    
  </template>
  
  <script setup lang="ts">
  const { data } = await useFetch('/api/user/kdunit/userkdunit46')
  
  definePageMeta({
  layout: 'layouthewan'
})
  </script>
  