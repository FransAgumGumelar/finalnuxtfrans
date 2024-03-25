<template>
  <h2>User KD UNIT 1</h2>
  
  <pre>{{ data }}</pre>
    
  </template>
  
  <script setup lang="ts">
  const { data } = await useFetch('/api/user/kdunit/userkdunit1')
  
  definePageMeta({
  layout: 'layouthewan'
})
  </script>
  