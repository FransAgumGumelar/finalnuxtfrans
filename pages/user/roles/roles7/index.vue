<template>
    <h2>User Role 7</h2>
    
    <pre>{{ data }}</pre>
      
    </template>
    
    <script setup lang="ts">
    const { data } = await useFetch('/api/user/roles/userrole7')
    
    definePageMeta({
    layout: 'layouthewan'
  })
    </script>
    