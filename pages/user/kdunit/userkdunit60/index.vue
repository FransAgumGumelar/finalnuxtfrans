<template>
    <h2>User Role 6</h2>
    
    <pre>{{ data }}</pre>
      
    </template>
    
    <script setup lang="ts">
    const { data } = await useFetch('/api/user/kdunit/userkdunit60')
    
    definePageMeta({
    layout: 'layouthewan'
  })
    </script>
    