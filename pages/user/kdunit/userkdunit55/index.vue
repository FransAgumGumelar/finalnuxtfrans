<template>
    <h2>User Role 5</h2>
    
    <pre>{{ data }}</pre>
      
    </template>
    
    <script setup lang="ts">
    const { data } = await useFetch('/api/user/kdunit/userkdunit55')
    
    definePageMeta({
    layout: 'layouthewan'
  })
    </script>
    