<template>
    <h2>User Departemen Bedah</h2>
    
    <pre>{{ data }}</pre>
      
    </template>
    
    <script setup lang="ts">
    const { data } = await useFetch('/api/user/departemen/userdepartemenbedah')
    
    definePageMeta({
    layout: 'layouthewan'
  })
    </script>
    