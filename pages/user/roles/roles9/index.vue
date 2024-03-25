<template>
    <h2>User Role 9</h2>
    
    <pre>{{ data }}</pre>
      
    </template>
    
    <script setup lang="ts">
    const { data } = await useFetch('/api/user/roles/userrole9')
    
    definePageMeta({
    layout: 'layouthewan'
  })
    </script>
    