<template>
    <h2>User Departemen Anak</h2>
    
    <pre>{{ data }}</pre>
      
    </template>
    
    <script setup lang="ts">
    const { data } = await useFetch('/api/user/departemen/userdepartemenanak')
    
    definePageMeta({
    layout: 'layouthewan'
  })
    </script>
    