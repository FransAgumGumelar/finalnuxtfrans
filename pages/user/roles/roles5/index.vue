<template>
    <h2>User Role 5</h2>
    
    <pre>{{ data }}</pre>
      
    </template>
    
    <script setup lang="ts">
    const { data } = await useFetch('/api/user/roles/userrole5')
    
    definePageMeta({
    layout: 'layouthewan'
  })
    </script>
    