<template>
    <h2>User Role 8</h2>
    
    <pre>{{ data }}</pre>
      
    </template>
    
    <script setup lang="ts">
    const { data } = await useFetch('/api/user/roles/userrole8')
    
    definePageMeta({
    layout: 'layouthewan'
  })
    </script>
    