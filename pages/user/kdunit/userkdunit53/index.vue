<template>
    <h2>User Role 4</h2>
    
    <pre>{{ data }}</pre>
      
    </template>
    
    <script setup lang="ts">
    const { data } = await useFetch('/api/user/kdunit/userkdunit53')
    
    definePageMeta({
    layout: 'layouthewan'
  })
    </script>
    