<template>
    <h2>User Role 11</h2>
    
    <pre>{{ data }}</pre>
      
    </template>
    
    <script setup lang="ts">
    const { data } = await useFetch('/api/user/kdunit/userkdunit71')
    
    definePageMeta({
    layout: 'layouthewan'
  })
    </script>
    