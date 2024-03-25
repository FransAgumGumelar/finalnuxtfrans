<template>
    <h2>User Role 7</h2>
    
    <pre>{{ data }}</pre>
      
    </template>
    
    <script setup lang="ts">
    const { data } = await useFetch('/api/user/kdunit/userkdunit61')
    
    definePageMeta({
    layout: 'layouthewan'
  })
    </script>
    