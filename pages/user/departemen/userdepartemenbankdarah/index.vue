<template>
    <h2>User Departemen Bank Darah</h2>
    
    <pre>{{ data }}</pre>
      
    </template>
    
    <script setup lang="ts">
    const { data } = await useFetch('/api/user/departemen/userdepartemenbankdarah')
    
    definePageMeta({
    layout: 'layouthewan'
  })
    </script>
    