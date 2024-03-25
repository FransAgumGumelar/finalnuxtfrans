<template>
  <h2>User Role 1</h2>
  
  <pre>{{ data }}</pre>
    
  </template>
  
  <script setup lang="ts">
  const { data } = await useFetch('/api/user/roles/userrole1')
  



  definePageMeta({
  layout: 'layouthewan'
})
  </script>
  