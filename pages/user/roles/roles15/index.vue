<template>
    <h2>User Role 15</h2>
    
    <pre>{{ data }}</pre>
      
    </template>
    
    <script setup lang="ts">
    const { data } = await useFetch('/api/user/roles/userrole15')
    
    definePageMeta({
    layout: 'layouthewan'
  })
    </script>
    