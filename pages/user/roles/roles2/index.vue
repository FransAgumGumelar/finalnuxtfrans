<template>
  <h2>User Role 2</h2>
  
  <pre>{{ data }}</pre>
    
  </template>
  
  <script setup lang="ts">
  const { data } = await useFetch('/api/user/roles/userrole2')
  
  definePageMeta({
  layout: 'layouthewan'
})
  </script>
  