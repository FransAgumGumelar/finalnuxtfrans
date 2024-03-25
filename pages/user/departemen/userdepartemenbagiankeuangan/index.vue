<template>
    <h2>User Departemen Bagian Keuangan</h2>
    
    <pre>{{ data }}</pre>
      
    </template>
    
    <script setup lang="ts">
    const { data } = await useFetch('/api/user/departemen/userdepartemenbagiankeuangan')
    
    definePageMeta({
    layout: 'layouthewan'
  })
    </script>
    