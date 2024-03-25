<template>
    <h2>User Role 14</h2>
    
    <pre>{{ data }}</pre>
      
    </template>
    
    <script setup lang="ts">
    const { data } = await useFetch('/api/user/roles/userrole14')
    
    definePageMeta({
    layout: 'layouthewan'
  })
    </script>
    