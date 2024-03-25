<template>
    <h2>User Role 13</h2>
    
    <pre>{{ data }}</pre>
      
    </template>
    
    <script setup lang="ts">
    const { data } = await useFetch('/api/user/roles/userrole13')
    
    definePageMeta({
    layout: 'layouthewan'
  })
    </script>
    