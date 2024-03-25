<template>
    <h2>User Role 4</h2>
    
    <pre>{{ data }}</pre>
      
    </template>
    
    <script setup lang="ts">
    const { data } = await useFetch('/api/user/roles/userrole4')
    
    definePageMeta({
    layout: 'layouthewan'
  })
    </script>
    