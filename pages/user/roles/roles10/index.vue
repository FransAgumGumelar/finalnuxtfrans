<template>
    <h2>User Role 10</h2>
    
    <pre>{{ data }}</pre>
      
    </template>
    
    <script setup lang="ts">
    const { data } = await useFetch('/api/user/roles/userrole10')
    
    definePageMeta({
    layout: 'layouthewan'
  })
    </script>
    