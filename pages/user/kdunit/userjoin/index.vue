<template>
    <h2>User JOIN</h2>
    
    <pre>{{ data }}</pre>
      
    </template>
    
    <script setup lang="ts">
    const { data } = await useFetch('/api/userjoin/join')
    
    definePageMeta({
    layout: 'layouthewan'
  })
    </script>
    