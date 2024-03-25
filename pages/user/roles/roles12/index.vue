<template>
    <h2>User Role 12</h2>
    
    <pre>{{ data }}</pre>
      
    </template>
    
    <script setup lang="ts">
    const { data } = await useFetch('/api/user/roles/userrole12')
    
    definePageMeta({
    layout: 'layouthewan'
  })
    </script>
    